import React, { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSession } from '../../context/SessionContext';
import { 
  searchNotes, 
  getAllSubjects,
  findNotesForCourse,
  formatResourceTitle,
  SubjectCatalogue, 
  NoteResource 
} from '../../api/notes';
import { formatCourseTitle } from '../../api/grades';
import { 
  BookOpen, 
  Search, 
  ChevronRight,
  FileText,
  ExternalLink,
  X
} from 'lucide-react';
import { PdfViewerModal } from '../modals/PdfViewerModal';
import {
  InteractiveBentoCard,
  StaggerContainer,
  StaggerItem,
  SpringPress,
} from '../common/motion';

export const NotesBentoView: React.FC = () => {
  const { user, inspectedNotesSubjectId, setInspectedNotesSubjectId } = useSession();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSemester, setSelectedSemester] = useState<number | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'notes' | 'papers' | 'syllabus'>('all');

  // Currently inspected subject in the File Explorer modal
  const [inspectedSubject, setInspectedSubject] = useState<SubjectCatalogue | null>(null);
  const [inspectedSubFilter, setInspectedSubFilter] = useState<'all' | 'notes' | 'papers' | 'syllabus'>('all');
  const [inspectedSearch, setInspectedSearch] = useState('');

  // Automatically open inspected subject when targeted externally (from Ctrl+K, Glance tile, etc.)
  useEffect(() => {
    if (inspectedNotesSubjectId) {
      const all = getAllSubjects();
      const match = all.find(
        (s) => s.id === inspectedNotesSubjectId || 
               s.name.toLowerCase() === inspectedNotesSubjectId.toLowerCase()
      ) || findNotesForCourse(inspectedNotesSubjectId, inspectedNotesSubjectId);

      if (match) {
        setInspectedSubject(match);
        setInspectedSubFilter('all');
        setInspectedSearch('');
      }
    }
  }, [inspectedNotesSubjectId]);

  const closeInspectedSubject = () => {
    setInspectedSubject(null);
    setInspectedNotesSubjectId(null);
  };

  // Active PDF viewer modal state
  const [viewerState, setViewerState] = useState<{
    isOpen: boolean;
    title: string;
    subjectName: string;
    resourceKind: 'note' | 'paper' | 'syllabus';
    url: string;
  }>({
    isOpen: false,
    title: '',
    subjectName: '',
    resourceKind: 'note',
    url: ''
  });

  const openViewer = (
    title: string, 
    subjectName: string, 
    url: string, 
    resourceKind: 'note' | 'paper' | 'syllabus' = 'note'
  ) => {
    setViewerState({
      isOpen: true,
      title: formatResourceTitle(title, resourceKind),
      subjectName,
      resourceKind,
      url
    });
  };

  // 1. Identify enrolled courses and match to notes catalogue
  const enrolledSubjectMatches = useMemo(() => {
    if (!user) return [];
    const sourceCourses = user.attendance && user.attendance.length > 0 
      ? user.attendance 
      : (user.marks || []);

    const matches: Array<{
      courseCode: string;
      courseTitle: string;
      credit?: number;
      catalogueEntry?: SubjectCatalogue;
    }> = [];

    const seenCodes = new Set<string>();

    sourceCourses.forEach((c) => {
      const code = c.courseCode;
      if (seenCodes.has(code)) return;
      seenCodes.add(code);

      const entry = findNotesForCourse(code, c.courseTitle);
      matches.push({
        courseCode: code,
        courseTitle: c.courseTitle,
        credit: c.credit,
        catalogueEntry: entry
      });
    });

    return matches;
  }, [user]);

  // 2. Filtered catalogue of all subjects
  const filteredSubjects = useMemo(() => {
    return searchNotes(searchQuery, selectedSemester, selectedCategory);
  }, [searchQuery, selectedSemester, selectedCategory]);

  // 3. Files of the inspected subject filtered by type & local search
  const inspectedFiles = useMemo(() => {
    if (!inspectedSubject) return [];

    const list: Array<{
      file: NoteResource;
      kind: 'note' | 'paper' | 'syllabus';
      formattedTitle: string;
    }> = [];

    if (inspectedSubFilter === 'all' || inspectedSubFilter === 'notes') {
      inspectedSubject.notes.forEach((f) => {
        list.push({ file: f, kind: 'note', formattedTitle: formatResourceTitle(f.name, 'note') });
      });
    }

    if (inspectedSubFilter === 'all' || inspectedSubFilter === 'papers') {
      inspectedSubject.papers.forEach((f) => {
        list.push({ file: f, kind: 'paper', formattedTitle: formatResourceTitle(f.name, 'paper') });
      });
    }

    if (inspectedSubFilter === 'all' || inspectedSubFilter === 'syllabus') {
      inspectedSubject.syllabus.forEach((f) => {
        list.push({ file: f, kind: 'syllabus', formattedTitle: formatResourceTitle(f.name, 'syllabus') });
      });
    }

    if (!inspectedSearch.trim()) return list;

    const q = inspectedSearch.trim().toLowerCase();
    return list.filter((item) => item.formattedTitle.toLowerCase().includes(q) || item.file.name.toLowerCase().includes(q));
  }, [inspectedSubject, inspectedSubFilter, inspectedSearch]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 pb-48 max-w-7xl mx-auto w-full space-y-8">
      {/* Top Header & Search Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mb-1">
            <span className="p-1 rounded-md bg-black/5 dark:bg-white/5">
              <BookOpen className="w-3.5 h-3.5" />
            </span>
            <span>academic intelligence • 98 subjects • 838 files</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] dark:text-[#FAFAFA] lowercase">
            notes & past papers
          </h1>
          <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] lowercase mt-1">
            unit-wise lecture presentations, pyqs and university syllabus
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full lg:w-80">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71717A] dark:text-[#A1A1AA]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="search subject, unit, or topic..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-2xl bg-[#FFFFFF] dark:bg-[#131316] border border-black/[0.08] dark:border-white/[0.08] text-[#111111] dark:text-[#FAFAFA] placeholder:text-[#71717A] dark:placeholder:text-[#52525B] focus:outline-none focus:ring-1 focus:ring-black/20 dark:focus:ring-white/20"
          />
        </div>
      </div>

      {/* Filter Row: Category Tabs & Semester Chips (Clean Minimalist Monochrome) */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-black/[0.04] dark:border-white/[0.04]">
        {/* Category switcher */}
        <div className="flex items-center space-x-1 p-1 rounded-2xl bg-[#FFFFFF] dark:bg-[#131316] border border-black/[0.06] dark:border-white/[0.06] overflow-x-auto">
          {[
            { id: 'all', label: 'all resources' },
            { id: 'notes', label: 'notes & ppts' },
            { id: 'papers', label: 'past papers' },
            { id: 'syllabus', label: 'syllabus' }
          ].map((cat) => (
            <SpringPress
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium lowercase whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-black/10 dark:bg-white/10 text-[#111111] dark:text-[#FAFAFA] font-bold'
                  : 'text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA]'
              }`}
            >
              <span>{cat.label}</span>
            </SpringPress>
          ))}
        </div>

        {/* Semester Chips */}
        <div className="flex items-center space-x-1 p-1 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/[0.04] dark:border-white/[0.04] overflow-x-auto">
          <SpringPress
            onClick={() => setSelectedSemester('all')}
            className={`px-2.5 py-1 rounded-xl text-xs lowercase transition-colors cursor-pointer ${
              selectedSemester === 'all'
                ? 'bg-[#FFFFFF] dark:bg-[#131316] text-[#111111] dark:text-[#FAFAFA] font-bold shadow-xs'
                : 'text-[#71717A] dark:text-[#A1A1AA]'
            }`}
          >
            <span>all sem</span>
          </SpringPress>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
            <SpringPress
              key={sem}
              onClick={() => setSelectedSemester(sem)}
              className={`px-2 py-1 rounded-xl text-xs lowercase transition-colors cursor-pointer ${
                selectedSemester === sem
                  ? 'bg-[#FFFFFF] dark:bg-[#131316] text-[#111111] dark:text-[#FAFAFA] font-bold shadow-xs'
                  : 'text-[#71717A] dark:text-[#A1A1AA]'
              }`}
            >
              <span>s{sem}</span>
            </SpringPress>
          ))}
        </div>
      </div>

      {/* SECTION 1: Pinned "Enrolled in your semester" Shelf */}
      {!searchQuery && selectedSemester === 'all' && enrolledSubjectMatches.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold text-[#111111] dark:text-[#FAFAFA] lowercase">
              enrolled courses
            </h2>
            <span className="text-xs text-[#71717A] dark:text-[#A1A1AA]">
              {enrolledSubjectMatches.filter((m) => m.catalogueEntry).length} available
            </span>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {enrolledSubjectMatches.map((item) => {
              const entry = item.catalogueEntry;
              const title = formatCourseTitle(item.courseTitle);

              return (
                <StaggerItem key={item.courseCode}>
                  <InteractiveBentoCard
                    className="p-5 flex flex-col justify-between space-y-4 hover:border-black/20 dark:hover:border-white/20 transition-all h-full"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 font-bold text-xs text-[#111111] dark:text-[#FAFAFA]">
                          {item.courseCode}
                        </span>
                        {entry && (
                          <span className="text-[11px] text-[#71717A] dark:text-[#A1A1AA]">
                            {entry.counts.total} files total
                          </span>
                        )}
                      </div>

                      <h3 className="font-bold text-sm text-[#111111] dark:text-[#FAFAFA] lowercase leading-snug">
                        {title}
                      </h3>

                      {entry && (
                        <div className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] pt-0.5">
                          {entry.counts.notes} notes • {entry.counts.papers} pyqs • {entry.counts.syllabus} syllabus
                        </div>
                      )}
                    </div>

                    {entry ? (
                      <div className="pt-3 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between">
                        <SpringPress
                          onClick={() => {
                            setInspectedSubject(entry);
                            setInspectedSubFilter('all');
                            setInspectedSearch('');
                          }}
                          className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs text-[#111111] dark:text-[#FAFAFA] transition-colors cursor-pointer"
                        >
                          <span>browse all {entry.counts.total} files</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </SpringPress>
                      </div>
                    ) : (
                      <div className="pt-3 border-t border-black/[0.04] dark:border-white/[0.04] text-[11px] text-[#71717A] dark:text-[#52525B]">
                        practical / lab coursework
                      </div>
                    )}
                  </InteractiveBentoCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </section>
      )}

      {/* SECTION 2: All Subjects Directory */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-[#111111] dark:text-[#FAFAFA] lowercase">
            {searchQuery ? `search results for “${searchQuery}”` : 'all university subjects'}
          </h2>
          <span className="text-xs text-[#71717A] dark:text-[#A1A1AA]">
            {filteredSubjects.length} subjects found
          </span>
        </div>

        {filteredSubjects.length === 0 ? (
          <div className="bento-card p-12 text-center text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase">
            no subjects match your current search query or semester filter.
          </div>
        ) : (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSubjects.map((subject) => (
              <StaggerItem key={subject.id}>
                <InteractiveBentoCard
                  onClick={() => {
                    setInspectedSubject(subject);
                    setInspectedSubFilter('all');
                    setInspectedSearch('');
                  }}
                  className="p-5 flex flex-col justify-between space-y-3.5 hover:border-black/20 dark:hover:border-white/20 transition-all cursor-pointer group h-full"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/5 dark:bg-white/5 text-[#71717A] dark:text-[#A1A1AA]">
                        {subject.semester ? `sem ${subject.semester}` : 'core / elective'}
                      </span>

                      <span className="text-[11px] text-[#71717A] dark:text-[#A1A1AA]">
                        {subject.counts.total} files
                      </span>
                    </div>

                    <h3 className="font-bold text-sm text-[#111111] dark:text-[#FAFAFA] lowercase leading-snug group-hover:underline underline-offset-2">
                      {subject.name}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-xs text-[#71717A] dark:text-[#A1A1AA]">
                    <span>{subject.counts.notes} notes • {subject.counts.papers} pyqs</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </InteractiveBentoCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        )}
      </section>

      {/* MODAL 1: Complete Subject File Explorer (Mounted cleanly via Portal to document.body) */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {inspectedSubject && (
          <div className="fixed inset-0 z-[99990] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeInspectedSubject}
              className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md z-[99990]"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl max-h-[88vh] bg-[#FFFFFF] dark:bg-[#131316] border border-black/10 dark:border-white/10 shadow-2xl rounded-3xl z-[99991] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="p-5 sm:p-6 border-b border-black/[0.06] dark:border-white/[0.06] flex items-start justify-between gap-4 shrink-0">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    {inspectedSubject.semester && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-black/5 dark:bg-white/5 text-[#71717A] dark:text-[#A1A1AA]">
                        semester {inspectedSubject.semester}
                      </span>
                    )}
                    <span className="text-xs text-[#71717A] dark:text-[#A1A1AA]">
                      {inspectedSubject.counts.total} verified files
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-extrabold text-[#111111] dark:text-[#FAFAFA] lowercase">
                    {inspectedSubject.name}
                  </h2>
                </div>

                <button
                  onClick={closeInspectedSubject}
                  className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors cursor-pointer"
                  aria-label="close subject file browser"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Sub-Filters: Category & Quick Search */}
              <div className="px-5 py-3 border-b border-black/[0.04] dark:border-white/[0.04] flex flex-wrap items-center justify-between gap-2.5 shrink-0 bg-black/[0.01] dark:bg-white/[0.01]">
                <div className="flex items-center space-x-1 p-0.5 rounded-xl bg-black/5 dark:bg-white/5 text-xs lowercase">
                  {[
                    { id: 'all', label: `all (${inspectedSubject.counts.total})` },
                    { id: 'notes', label: `notes (${inspectedSubject.counts.notes})` },
                    { id: 'papers', label: `pyqs (${inspectedSubject.counts.papers})` },
                    { id: 'syllabus', label: `syllabus (${inspectedSubject.counts.syllabus})` }
                  ].map((tab) => (
                    <SpringPress
                      key={tab.id}
                      onClick={() => setInspectedSubFilter(tab.id as any)}
                      className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                        inspectedSubFilter === tab.id
                          ? 'bg-[#FFFFFF] dark:bg-[#131316] text-[#111111] dark:text-[#FAFAFA] font-bold shadow-xs'
                          : 'text-[#71717A] dark:text-[#A1A1AA]'
                      }`}
                    >
                      <span>{tab.label}</span>
                    </SpringPress>
                  ))}
                </div>

                <div className="relative w-48 sm:w-56">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#71717A] dark:text-[#A1A1AA]" />
                  <input
                    type="text"
                    value={inspectedSearch}
                    onChange={(e) => setInspectedSearch(e.target.value)}
                    placeholder="filter files..."
                    className="w-full pl-8 pr-3 py-1 text-xs rounded-xl bg-[#FFFFFF] dark:bg-[#131316] border border-black/[0.06] dark:border-white/[0.06] text-[#111111] dark:text-[#FAFAFA] placeholder:text-[#71717A] dark:placeholder:text-[#52525B] focus:outline-none"
                  />
                </div>
              </div>

              {/* Complete File List (Scrollable, no file truncated) */}
              <div className="p-4 sm:p-6 overflow-y-auto divide-y divide-black/[0.04] dark:divide-white/[0.04] space-y-1">
                {inspectedFiles.length === 0 ? (
                  <div className="py-12 text-center text-xs text-[#71717A] dark:text-[#52525B] lowercase">
                    no files found matching this filter.
                  </div>
                ) : (
                  inspectedFiles.map((item, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="py-3 px-3 rounded-2xl hover:bg-black/[0.02] dark:hover:bg-white/[0.02] flex items-center justify-between gap-3 transition-colors group cursor-pointer"
                    >
                      <div className="flex items-center space-x-3 min-w-0">
                        <div className="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/5 flex items-center justify-center shrink-0 text-[#71717A] dark:text-[#A1A1AA]">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs sm:text-sm font-semibold text-[#111111] dark:text-[#FAFAFA] truncate lowercase">
                            {item.formattedTitle}
                          </div>
                          <div className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] flex items-center space-x-2 mt-0.5">
                            <span className="lowercase">
                              {item.kind === 'note' ? 'lecture resource' : item.kind === 'paper' ? 'university pyq' : 'syllabus'}
                            </span>
                            {item.file.unit && <span>• unit {item.file.unit}</span>}
                          </div>
                        </div>
                      </div>

                      {/* File Action Buttons */}
                      <div className="flex items-center space-x-1.5 shrink-0">
                        <SpringPress
                          onClick={() => openViewer(item.formattedTitle, inspectedSubject.name, item.file.url, item.kind)}
                          scaleHover={1.02}
                          scaleTap={0.96}
                          className="px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs text-[#111111] dark:text-[#FAFAFA] font-medium transition-colors cursor-pointer"
                        >
                          <span>view</span>
                        </SpringPress>
                        <motion.a
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.94 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          href={item.file.url.replace('/preview', '/view')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors"
                          title="Open in Google Drive"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </motion.a>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>,
      document.body
    )}

      {/* MODAL 2: Embedded Document Viewer Modal */}
      <PdfViewerModal
        isOpen={viewerState.isOpen}
        onClose={() => setViewerState((prev) => ({ ...prev, isOpen: false }))}
        title={viewerState.title}
        subjectName={viewerState.subjectName}
        resourceKind={viewerState.resourceKind}
        url={viewerState.url}
      />
    </div>
  );
};
