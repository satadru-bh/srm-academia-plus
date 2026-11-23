import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSession, THEME_LIST, THEME_DETAILS } from '../../context/SessionContext';
import { formatCourseTitle } from '../../api/grades';
import { calculateAttendanceMargin } from '../../api/margin';
import { getAllSubjects, findNotesForCourse } from '../../api/notes';
import { FACULTY_DIRECTORY } from '../../data/facultyDirectory';
import { matchStudentFaculty } from '../../utils/facultyMatcher';
import { Keycap } from '../common/Keycap';
import {
  Search,
  LayoutGrid,
  CheckCircle,
  CalendarDays,
  Award,
  CalendarRange,
  Calendar,
  User,
  Users,
  RefreshCw,
  Calculator,
  Layers,
  ArrowRight,
  BookOpen,
  LogOut,
  Copy,
  FileText,
  Palette
} from 'lucide-react';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenGpaPredictor?: () => void;
  onOpenAttendancePredictor?: () => void;
}

export type PaletteCategory =
  | 'recent'
  | 'themes'
  | 'quick actions'
  | 'views'
  | 'faculty'
  | 'study material'
  | 'attendance'
  | 'internal marks'
  | 'repository';

interface PaletteItem {
  id: string;
  category: PaletteCategory;
  title: string;
  subtitle?: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  badgeStyle?: 'safe' | 'danger' | 'default';
  keywords?: string[];
  action: () => void;
}

const RECENT_ACTIONS_KEY = 'cw_recent_palette_actions_v2';

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  onOpenGpaPredictor,
  onOpenAttendancePredictor
}) => {
  const {
    user,
    setActiveTab,
    openNotesSubject,
    openCourseAttendance,
    openCourseMarks,
    theme,
    setTheme,
    refreshData,
    isSyncing,
    logout
  } = useSession();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentActionIds, setRecentActionIds] = useState<string[]>(() => {
    try {
      const raw = window.localStorage.getItem(RECENT_ACTIONS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Sync recent action IDs from localStorage on open
  useEffect(() => {
    if (isOpen) {
      try {
        const raw = window.localStorage.getItem(RECENT_ACTIONS_KEY);
        if (raw) setRecentActionIds(JSON.parse(raw));
      } catch {}
      setSearchQuery('');
      setSelectedIndex(0);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  // Record an executed action to recent history (up to 5 actions)
  const recordAction = useCallback((itemId: string) => {
    try {
      const originalId = itemId.startsWith('recent-') ? itemId.replace('recent-', '') : itemId;
      const raw = window.localStorage.getItem(RECENT_ACTIONS_KEY);
      const prev: string[] = raw ? JSON.parse(raw) : [];
      const updated = [originalId, ...prev.filter((id) => id !== originalId)].slice(0, 5);
      window.localStorage.setItem(RECENT_ACTIONS_KEY, JSON.stringify(updated));
      setRecentActionIds(updated);
    } catch {}
  }, []);

  const handleExecute = useCallback((item: PaletteItem) => {
    recordAction(item.id);
    item.action();
  }, [recordAction]);

  const resolvedFaculty = useMemo(() => matchStudentFaculty(FACULTY_DIRECTORY, user), [user]);

  // Construct all comprehensive palette items
  const allItems: PaletteItem[] = useMemo(() => {
    const items: PaletteItem[] = [];

    // 1. Color Themes (Creative masterpiece palettes)
    THEME_LIST.forEach((t) => {
      const details = THEME_DETAILS[t];
      const isCurrent = theme === t;
      items.push({
        id: `theme-${t}`,
        category: 'themes',
        title: `theme: ${details.name}`,
        subtitle: `${details.desc}${isCurrent ? ' • (currently active)' : ''}`,
        icon: Palette,
        badge: isCurrent ? 'active' : 'theme',
        badgeStyle: isCurrent ? 'safe' : 'default',
        keywords: [
          'theme',
          'themes',
          'color',
          'mode',
          'appearance',
          details.name,
          details.desc,
          t
        ],
        action: () => {
          setTheme(t);
          onClose();
        }
      });
    });

    // 2. High-Frequency Quick Actions
    items.push(
      {
        id: 'action-gpa',
        category: 'quick actions',
        title: 'open gpa predictor',
        subtitle: 'simulate end-semester score requirements out of 75',
        icon: Calculator,
        badge: 'simulate',
        keywords: ['gpa predictor', 'calculator', 'simulate', 'target', 'end sem', 'calculate'],
        action: () => {
          onClose();
          if (onOpenGpaPredictor) {
            onOpenGpaPredictor();
          } else {
            setActiveTab('marks');
          }
        }
      },
      {
        id: 'action-forecast',
        category: 'quick actions',
        title: 'forecast attendance margin',
        subtitle: 'simulate attending or skipping upcoming lectures',
        icon: Layers,
        badge: 'simulate',
        keywords: ['attendance predictor', 'forecast', 'simulate', 'margin', 'bunk calculator'],
        action: () => {
          onClose();
          if (onOpenAttendancePredictor) {
            onOpenAttendancePredictor();
          } else {
            setActiveTab('attendance');
          }
        }
      },
      {
        id: 'action-sync',
        category: 'quick actions',
        title: 'sync student data',
        subtitle: isSyncing ? 'syncing in progress...' : 'fetch latest live attendance & marks from srm',
        icon: RefreshCw,
        badge: 'live sync',
        keywords: ['sync', 'refresh', 'fetch', 'reload', 'update'],
        action: () => {
          refreshData();
          onClose();
        }
      },
      {
        id: 'action-browse-pyqs',
        category: 'quick actions',
        title: 'browse past question papers (pyqs)',
        subtitle: 'search 285+ university question papers across all subjects',
        icon: FileText,
        badge: 'pyqs',
        keywords: ['pyqs', 'question papers', 'past papers', 'exam papers', 'previous years', 'archives'],
        action: () => {
          setActiveTab('notes');
          onClose();
        }
      },
      {
        id: 'action-view-hallticket',
        category: 'quick actions',
        title: 'view exam timetable & hall ticket',
        subtitle: 'end-semester examination dates, session slots & courses',
        icon: CalendarRange,
        badge: 'exams',
        keywords: ['hall ticket', 'exams', 'exam timetable', 'end sem', 'dates'],
        action: () => {
          setActiveTab('exam-timetable');
          onClose();
        }
      },
      {
        id: 'action-academic-calendar',
        category: 'quick actions',
        title: 'view academic calendar & declared holidays',
        subtitle: 'official university semester schedule, day orders & upcoming milestones',
        icon: Calendar,
        badge: 'calendar',
        keywords: ['academic calendar', 'holidays', 'day order', 'vacation', 'milestones'],
        action: () => {
          setActiveTab('calendar');
          onClose();
        }
      },
      {
        id: 'action-copy-netid',
        category: 'quick actions',
        title: 'copy official email (netid)',
        subtitle: `${user?.profile.email || `${user?.profile.regNo?.toLowerCase()}@srmist.edu.in`} • copy to clipboard`,
        icon: Copy,
        badge: 'netid',
        keywords: ['copy email', 'copy netid', 'email', 'netid', 'clipboard'],
        action: () => {
          const email = user?.profile.email || `${user?.profile.regNo?.toLowerCase()}@srmist.edu.in`;
          navigator.clipboard?.writeText(email);
          onClose();
        }
      },
      {
        id: 'action-copy-regno',
        category: 'quick actions',
        title: 'copy registration number',
        subtitle: `${user?.profile.regNo || ''} • copy to clipboard`,
        icon: Copy,
        badge: 'reg no',
        keywords: ['copy regno', 'registration number', 'reg no', 'clipboard'],
        action: () => {
          if (user?.profile.regNo) {
            navigator.clipboard?.writeText(user.profile.regNo);
          }
          onClose();
        }
      },
      {
        id: 'action-advisor',
        category: 'quick actions',
        title: 'view faculty advisor & classroom venue',
        subtitle: 'student profile, classroom & academic advisor information',
        icon: User,
        badge: 'profile',
        keywords: ['advisor', 'faculty advisor', 'contact', 'venue', 'tp 706', 'profile'],
        action: () => {
          setActiveTab('profile');
          onClose();
        }
      },
      {
        id: 'action-faculty-finder',
        category: 'quick actions',
        title: 'find faculty & staff cabins',
        subtitle: 'search 50+ professors, advisors and hods across tech park & university bldg',
        icon: Users,
        badge: 'directory',
        keywords: ['faculty', 'finder', 'cabin', 'professor', 'advisor', 'phone', 'email', 'contact', 'tp', 'ub', 'directory'],
        action: () => {
          setActiveTab('faculty');
          onClose();
        }
      },
      {
        id: 'action-signout',
        category: 'quick actions',
        title: 'sign out of academia plus',
        subtitle: `disconnect session for ${user?.profile.regNo || 'current student'} and clear session cache`,
        icon: LogOut,
        badge: 'account',
        keywords: ['sign out', 'logout', 'disconnect', 'exit', 'leave', 'clear session', 'log off'],
        action: () => {
          logout();
          onClose();
        }
      }
    );

    // 3. Primary Navigation Views
    items.push(
      {
        id: 'view-overview',
        category: 'views',
        title: 'at a glance',
        subtitle: 'daily dashboard, today classes & attendance margin',
        icon: LayoutGrid,
        keywords: ['home', 'dashboard', 'overview', 'glance', 'summary'],
        action: () => {
          setActiveTab('overview');
          onClose();
        }
      },
      {
        id: 'view-faculty',
        category: 'views',
        title: 'faculty finder',
        subtitle: 'locate cabins, emails & phone contacts for professors and advisors in tp & ub',
        icon: Users,
        keywords: ['faculty', 'finder', 'professor', 'teacher', 'cabin', 'advisor', 'beena', 'thenmozhi', 'vidhya', 'directory'],
        action: () => {
          setActiveTab('faculty');
          onClose();
        }
      },
      {
        id: 'view-attendance',
        category: 'views',
        title: 'attendance dashboard',
        subtitle: '75% margin intelligence, conducted & absent hours',
        icon: CheckCircle,
        keywords: ['attendance', 'margin', 'bunk', 'skip', 'classes', 'hours'],
        action: () => {
          setActiveTab('attendance');
          onClose();
        }
      },
      {
        id: 'view-timetable',
        category: 'views',
        title: 'timetable schedule',
        subtitle: '5-day academic cycle schedule & batch periods',
        icon: CalendarDays,
        keywords: ['timetable', 'schedule', 'periods', 'routine', 'classes', 'batch', 'export'],
        action: () => {
          setActiveTab('timetable');
          onClose();
        }
      },
      {
        id: 'view-marks',
        category: 'views',
        title: 'internal marks & grades',
        subtitle: 'internal assessments, trend histogram & end-sem targets',
        icon: Award,
        keywords: ['marks', 'grades', 'internals', 'scores', 'gpa', 'tests', 'evaluations'],
        action: () => {
          setActiveTab('marks');
          onClose();
        }
      },
      {
        id: 'view-notes',
        category: 'views',
        title: 'notes & past papers repository',
        subtitle: 'unit-wise notes, slide decks & pyqs across 98 subjects',
        icon: BookOpen,
        keywords: ['notes', 'pyq', 'exam', 'paper', 'ppt', 'slides', 'syllabus', 'study', 'resources'],
        action: () => {
          setActiveTab('notes');
          onClose();
        }
      },
      {
        id: 'view-exam-timetable',
        category: 'views',
        title: 'exam timetable',
        subtitle: 'end-semester exam dates, session slots & hall ticket',
        icon: CalendarRange,
        keywords: ['exams', 'exam timetable', 'end sem', 'dates', 'tests', 'hall ticket'],
        action: () => {
          setActiveTab('exam-timetable');
          onClose();
        }
      },
      {
        id: 'view-calendar',
        category: 'views',
        title: 'academic calendar',
        subtitle: 'day orders, declared holidays & academic milestones',
        icon: Calendar,
        keywords: ['calendar', 'holidays', 'day order', 'events', 'milestones'],
        action: () => {
          setActiveTab('calendar');
          onClose();
        }
      },
      {
        id: 'view-profile',
        category: 'views',
        title: 'profile & srm credentials',
        subtitle: 'official NetID, student details & faculty advisor',
        icon: User,
        keywords: ['profile', 'netid', 'email', 'advisor', 'registration', 'user', 'account'],
        action: () => {
          setActiveTab('profile');
          onClose();
        }
      }
    );

    // 4. Enrolled Student Courses: Study Material, Attendance, Marks
    if (user && Array.isArray(user.attendance)) {
      user.attendance.forEach((c) => {
        const cleanTitle = formatCourseTitle(c.courseTitle);
        const marginInfo = calculateAttendanceMargin(c.hoursConducted, c.hoursPresent);
        const marginDisplay = marginInfo.status === 'danger'
          ? `${marginInfo.required} needed`
          : marginInfo.margin > 0
          ? `+${marginInfo.margin} margin`
          : '0 margin';

        const matchingNotes = findNotesForCourse(c.courseCode, c.courseTitle);

        // a) Study Material Action
        items.push({
          id: `enrolled-notes-${c.courseCode}`,
          category: 'study material',
          title: cleanTitle,
          subtitle: `${c.courseCode} • ${matchingNotes ? `${matchingNotes.counts.total} verified files (notes, pyqs)` : 'lecture slides & syllabus'}`,
          icon: BookOpen,
          badge: 'open material',
          keywords: [
            c.courseCode.toLowerCase(),
            c.courseTitle.toLowerCase(),
            cleanTitle.toLowerCase(),
            'notes',
            'material',
            'slides',
            'pyqs',
            'syllabus',
            'study'
          ],
          action: () => {
            if (matchingNotes) {
              openNotesSubject(matchingNotes.id);
            } else {
              openNotesSubject(c.courseCode);
            }
            onClose();
          }
        });

        // b) Attendance Action
        items.push({
          id: `enrolled-attendance-${c.courseCode}`,
          category: 'attendance',
          title: `${cleanTitle} attendance`,
          subtitle: `${c.courseCode} • ${c.attendancePercent}% (${marginDisplay})${c.slot ? ` • slot ${c.slot}` : ''}`,
          icon: CheckCircle,
          badge: `${c.attendancePercent}%`,
          badgeStyle: c.attendancePercent >= 75 ? 'safe' : 'danger',
          keywords: [
            c.courseCode.toLowerCase(),
            cleanTitle.toLowerCase(),
            'attendance',
            'margin',
            'bunk',
            'skip',
            c.slot ? c.slot.toLowerCase() : '',
            c.facultyName?.toLowerCase() || ''
          ],
          action: () => {
            openCourseAttendance(c.courseCode);
            onClose();
          }
        });

        // c) Internal Marks Action
        items.push({
          id: `enrolled-marks-${c.courseCode}`,
          category: 'internal marks',
          title: `${cleanTitle} internal marks`,
          subtitle: `${c.courseCode} • internal test assessments & end-sem targets`,
          icon: Award,
          badge: 'view tests',
          keywords: [
            c.courseCode.toLowerCase(),
            cleanTitle.toLowerCase(),
            'marks',
            'tests',
            'internals',
            'grades',
            'evaluations'
          ],
          action: () => {
            openCourseMarks(c.courseCode);
            onClose();
          }
        });
      });
    }

    // 5. Complete University Notes Repository (All 98 Subjects)
    getAllSubjects().forEach((s) => {
      const isAlreadyInEnrolled = user?.attendance.some(
        (c) => c.courseCode.toLowerCase() === s.id.toLowerCase() || 
               formatCourseTitle(c.courseTitle).toLowerCase() === s.name.toLowerCase()
      );

      if (!isAlreadyInEnrolled) {
        items.push({
          id: `repo-notes-${s.id}`,
          category: 'repository',
          title: s.name.toLowerCase(),
          subtitle: `notes repository • ${s.counts.notes} notes • ${s.counts.papers} pyqs ${s.semester ? `• sem ${s.semester}` : ''}`,
          icon: BookOpen,
          badge: s.semester ? `sem ${s.semester}` : 'open material',
          keywords: [
            'notes',
            'pyq',
            'slides',
            'paper',
            'syllabus',
            'study',
            s.id.toLowerCase(),
            s.name.toLowerCase()
          ],
          action: () => {
            openNotesSubject(s.id);
            onClose();
          }
        });
      }
    });

    // 6. Enrolled Faculty & Advisors (High-Priority Shortcuts)
    resolvedFaculty.filter((f) => f.isMyFaculty).forEach((f) => {
      const isAdvisor = f.roleBadge === 'Faculty Advisor' || f.roleBadge === 'Academic Advisor';
      const isTeacher = !isAdvisor;
      const courseKeywords = (f.coursesTaught || []).flatMap((c) => [c.code.toLowerCase(), c.title.toLowerCase()]);
      const subtitleParts = [
        f.cabin,
        f.designation ? f.designation.toLowerCase() : '',
        f.department ? `(${f.department})` : '',
        f.email
      ].filter(Boolean).join(' • ');

      items.push({
        id: `faculty-${f.id}`,
        category: 'faculty',
        title: f.name.toLowerCase(),
        subtitle: subtitleParts,
        icon: Users,
        badge: isAdvisor ? 'advisor' : isTeacher ? 'teacher' : 'faculty',
        badgeStyle: 'safe',
        keywords: [
          'faculty',
          'professor',
          'teacher',
          'directory',
          f.name.toLowerCase(),
          f.empId ? f.empId.toLowerCase() : '',
          f.cabin ? f.cabin.toLowerCase() : '',
          f.department ? f.department.toLowerCase() : '',
          f.email ? f.email.toLowerCase() : '',
          ...courseKeywords,
          ...(f.phone ? [f.phone] : [])
        ].filter(Boolean),
        action: () => {
          setActiveTab('faculty');
          onClose();
        }
      });
    });

    return items;
  }, [
    user,
    setActiveTab,
    openNotesSubject,
    openCourseAttendance,
    openCourseMarks,
    theme,
    setTheme,
    onClose,
    onOpenGpaPredictor,
    onOpenAttendancePredictor,
    isSyncing,
    refreshData,
    logout
  ]);

  // Filter items matching query, or show ALL options by default with recent actions at top
  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    if (!q) {
      // 1. Build Recent Actions Section
      const recentItems: PaletteItem[] = [];
      recentActionIds.forEach((id) => {
        const match = allItems.find((item) => item.id === id);
        if (match) {
          recentItems.push({
            ...match,
            id: `recent-${match.id}`,
            category: 'recent',
            subtitle: `${match.subtitle || ''} (recent)`
          });
        }
      });

      return [...recentItems, ...allItems];
    }

    // Filter core actions
    const coreMatches = allItems.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchSub = item.subtitle ? item.subtitle.toLowerCase().includes(q) : false;
      const matchCategory = item.category.toLowerCase().includes(q);
      const matchKeywords = item.keywords ? item.keywords.some((k) => k.includes(q)) : false;
      return matchTitle || matchSub || matchCategory || matchKeywords;
    });

    // Dynamically search full faculty directory when user searches
    const facultyMatches: PaletteItem[] = [];
    if (q.length >= 2) {
      for (const f of resolvedFaculty) {
        if (facultyMatches.length >= 15) break;
        if (f.isMyFaculty) continue; // Already in coreMatches

        const nameMatch = f.name.toLowerCase().includes(q);
        const deptMatch = f.department ? f.department.toLowerCase().includes(q) : false;
        const desigMatch = f.designation ? f.designation.toLowerCase().includes(q) : false;
        const cabinMatch = f.cabin ? f.cabin.toLowerCase().includes(q) : false;
        const emailMatch = f.email ? f.email.toLowerCase().includes(q) : false;
        const empIdMatch = f.empId ? f.empId.toLowerCase().includes(q) : false;

        if (nameMatch || deptMatch || desigMatch || cabinMatch || emailMatch || empIdMatch) {
          const subtitleParts = [
            f.cabin,
            f.designation ? f.designation.toLowerCase() : '',
            f.department ? `(${f.department})` : '',
            f.email
          ].filter(Boolean).join(' • ');

          facultyMatches.push({
            id: `faculty-${f.id}`,
            category: 'faculty',
            title: f.name.toLowerCase(),
            subtitle: subtitleParts,
            icon: Users,
            badge: f.roleBadge === 'Faculty Advisor' ? 'advisor' : 'faculty',
            badgeStyle: f.roleBadge ? 'safe' : 'default',
            action: () => {
              setActiveTab('faculty');
              onClose();
            }
          });
        }
      }
    }

    // Cap to top 40 results to guarantee instantaneous 120 FPS rendering
    return [...coreMatches, ...facultyMatches].slice(0, 40);
  }, [allItems, searchQuery, recentActionIds, setActiveTab, onClose]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (filteredItems.length > 0 ? (prev + 1) % filteredItems.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredItems.length > 0 ? (prev - 1 + filteredItems.length) % filteredItems.length : 0
        );
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          handleExecute(filteredItems[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose, handleExecute]);

  // Reset selected index when search changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  // Auto-scroll to selected element
  useEffect(() => {
    if (listRef.current) {
      const selectedEl = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm z-[99999]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-2xl bento-card border border-black/10 dark:border-white/10 shadow-2xl rounded-2xl z-[100000] flex flex-col overflow-hidden max-h-[78vh]"
          >
            {/* Search Input Bar */}
            <div className="p-3.5 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center space-x-3 bg-black/[0.01] dark:bg-white/[0.01]">
              <Search className="w-4 h-4 text-[#71717A] dark:text-[#A1A1AA] shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="search subjects, study material, attendance, marks, actions, themes..."
                className="w-full bg-transparent text-sm text-[#111111] dark:text-[#FAFAFA] placeholder-[#71717A] dark:placeholder-[#52525B] focus:outline-none lowercase font-sans"
              />
              <button
                type="button"
                onClick={onClose}
                className="hidden sm:inline-flex items-center cursor-pointer"
                title="Press Esc to close"
              >
                <Keycap size="xs">esc</Keycap>
              </button>
            </div>

            {/* Results List */}
            <div ref={listRef} className="flex-1 overflow-y-auto p-2 space-y-0.5">
              {filteredItems.length === 0 ? (
                <div className="p-12 text-center text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase">
                  no results found for "{searchQuery}"
                </div>
              ) : (
                filteredItems.map((item, idx) => {
                  const Icon = item.icon;
                  const isSelected = selectedIndex === idx;
                  const isFirstOfCategory =
                    idx === 0 || filteredItems[idx - 1].category !== item.category;

                  return (
                    <React.Fragment key={item.id}>
                      {/* Section Category Header */}
                      {isFirstOfCategory && (
                        <div className="px-3 pt-3 pb-1 text-[10px] font-bold lowercase text-[#71717A] dark:text-[#A1A1AA] tracking-wider uppercase">
                          <span>{item.category === 'recent' ? 'recent actions' : item.category}</span>
                        </div>
                      )}

                      <div
                        data-index={idx}
                        data-selected={isSelected}
                        onClick={() => handleExecute(item)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        style={
                          isSelected
                            ? {
                                backgroundColor: 'var(--color-accent)',
                                color: 'var(--color-accent-text)'
                              }
                            : undefined
                        }
                        className={`flex items-center justify-between p-2.5 rounded-xl transition-colors cursor-pointer select-none ${
                          isSelected
                            ? 'font-semibold shadow-xs'
                            : 'hover:bg-black/5 dark:hover:bg-white/5 text-[#111111] dark:text-[#FAFAFA]'
                        }`}
                      >
                        <div className="flex items-center space-x-3 min-w-0">
                          <div
                            style={
                              isSelected
                                ? {
                                    backgroundColor: 'var(--color-accent-sub)',
                                    color: 'var(--color-accent-text)'
                                  }
                                : undefined
                            }
                            className={`p-1.5 rounded-lg shrink-0 ${
                              isSelected
                                ? 'palette-icon-box font-semibold'
                                : 'bg-black/5 dark:bg-white/5 text-[#71717A] dark:text-[#A1A1AA]'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <div className="text-xs font-bold lowercase truncate">
                              {item.title}
                            </div>
                            {item.subtitle && (
                              <div
                                style={isSelected ? { color: 'var(--color-accent-text)' } : undefined}
                                className={`text-[11px] truncate mt-0.5 ${
                                  isSelected ? 'opacity-85' : 'text-[#71717A] dark:text-[#A1A1AA]'
                                }`}
                              >
                                {item.subtitle}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 shrink-0 ml-3">
                          {item.badge && (
                            <span
                              style={
                                isSelected
                                  ? {
                                      backgroundColor: 'var(--color-accent-sub)',
                                      color: 'var(--color-accent-text)'
                                    }
                                  : undefined
                              }
                              className={`text-[10px] px-2 py-0.5 rounded-full ${
                                isSelected
                                  ? 'palette-badge font-semibold'
                                  : item.badgeStyle === 'safe'
                                  ? 'bg-emerald-500/10 text-emerald-500 dark:text-emerald-400'
                                  : item.badgeStyle === 'danger'
                                  ? 'bg-rose-500/10 text-rose-500 dark:text-rose-400'
                                  : 'bg-black/5 dark:bg-white/5 text-[#71717A] dark:text-[#A1A1AA]'
                              }`}
                            >
                              {item.badge}
                            </span>
                          )}
                          <span
                            style={isSelected ? { color: 'var(--color-accent-text)' } : undefined}
                            className={`text-[10px] lowercase ${
                              isSelected ? 'opacity-90' : 'text-[#71717A] dark:text-[#52525B]'
                            }`}
                          >
                            {item.category === 'recent' ? 'recent' : item.category}
                          </span>
                          <ArrowRight
                            style={isSelected ? { color: 'var(--color-accent-text)' } : undefined}
                            className={`w-3.5 h-3.5 transition-transform ${
                              isSelected ? 'translate-x-0.5 opacity-100' : 'opacity-0'
                            }`}
                          />
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })
              )}
            </div>

            {/* Footer Navigation Hints */}
            <div className="px-4 py-2.5 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[10px] text-[#71717A] dark:text-[#A1A1AA]">
              <div className="flex items-center space-x-3.5">
                <span className="flex items-center space-x-1">
                  <Keycap size="xs">↑</Keycap>
                  <Keycap size="xs">↓</Keycap>
                  <span className="pl-0.5">navigate</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Keycap size="xs">↵</Keycap>
                  <span className="pl-0.5">select</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Keycap size="xs">esc</Keycap>
                  <span className="pl-0.5">close</span>
                </span>
              </div>
              <span className="lowercase">
                academia plus command • {filteredItems.length} options
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  if (typeof document !== 'undefined') {
    return createPortal(modalContent, document.body);
  }
  return modalContent;
};
