import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useSession } from '../../context/SessionContext';
import {
  Search,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ExternalLink
} from 'lucide-react';
import { FACULTY_DIRECTORY } from '../../data/facultyDirectory';
import { matchStudentFaculty } from '../../utils/facultyMatcher';
import {
  InteractiveBentoCard,
  StaggerContainer,
  StaggerItem,
  SpringPress,
} from '../common/motion';

type FacultyFilter = 'all' | 'my-faculty' | 'advisors' | 'computing' | 'mathematics' | 'engineering' | 'sciences';

export const FacultyFinderBentoView: React.FC = () => {
  const { user, facultySearchQuery, setFacultySearchQuery } = useSession();
  const [searchQuery, setSearchQuery] = useState(facultySearchQuery || '');
  const [activeFilter, setActiveFilter] = useState<FacultyFilter>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(60);

  React.useEffect(() => {
    if (facultySearchQuery) {
      setSearchQuery(facultySearchQuery);
      setActiveFilter('all');
      setVisibleCount(60);
    }
  }, [facultySearchQuery]);

  // Dynamic faculty directory matching currently logged-in student's real enrolled courses with zero false-positives
  const sortedFaculty = useMemo(() => {
    const mapped = matchStudentFaculty(FACULTY_DIRECTORY, user);
    return mapped.sort((a, b) => {
      if (a.isMyFaculty && !b.isMyFaculty) return -1;
      if (!a.isMyFaculty && b.isMyFaculty) return 1;
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
  }, [user]);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const handleFilterChange = (filter: FacultyFilter) => {
    setActiveFilter(filter);
    setVisibleCount(60);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (!query && facultySearchQuery) {
      setFacultySearchQuery(null);
    }
    setVisibleCount(60);
  };

  const filteredFaculty = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    if (!q && activeFilter === 'all') {
      return sortedFaculty;
    }

    return sortedFaculty.filter((f) => {
      // 1. Tag filter
      if (activeFilter === 'my-faculty' && !f.isMyFaculty) return false;
      if (activeFilter === 'advisors' && f.roleBadge !== 'Faculty Advisor' && f.roleBadge !== 'Academic Advisor') return false;
      if (activeFilter === 'computing') {
        const text = `${f.department} ${f.designation}`.toLowerCase();
        if (!text.includes('comput') && !text.includes('software') && !text.includes('information tech') && !text.includes('data science') && !text.includes('ai')) return false;
      }
      if (activeFilter === 'mathematics') {
        const text = `${f.department} ${f.designation}`.toLowerCase();
        if (!text.includes('mathemati')) return false;
      }
      if (activeFilter === 'engineering') {
        const text = `${f.department} ${f.designation}`.toLowerCase();
        if (!text.includes('engineer') && !text.includes('mechanical') && !text.includes('civil') && !text.includes('electrical') && !text.includes('electronics') && !text.includes('aerospace')) return false;
      }
      if (activeFilter === 'sciences') {
        const text = `${f.department} ${f.designation}`.toLowerCase();
        if (!text.includes('science') && !text.includes('physic') && !text.includes('chemist') && !text.includes('biotech') && !text.includes('pharm')) return false;
      }

      // 2. Query filter
      if (!q) return true;

      const nameMatch = f.name.toLowerCase().includes(q);
      const empIdMatch = f.empId ? f.empId.toLowerCase().includes(q) : false;
      const deptMatch = f.department ? f.department.toLowerCase().includes(q) : false;
      const cabinMatch = f.cabin ? f.cabin.toLowerCase().includes(q) : false;
      const emailMatch = f.email ? f.email.toLowerCase().includes(q) : false;
      const designationMatch = f.designation ? f.designation.toLowerCase().includes(q) : false;
      const specMatch = f.specialization ? f.specialization.toLowerCase().includes(q) : false;
      const coursesMatch = f.coursesTaught?.some(
        c => c.code.toLowerCase().includes(q) || c.title.toLowerCase().includes(q) || (c.slot && c.slot.toLowerCase().includes(q))
      );

      return nameMatch || empIdMatch || deptMatch || cabinMatch || emailMatch || designationMatch || specMatch || coursesMatch;
    });
  }, [searchQuery, activeFilter]);

  const stats = useMemo(() => {
    const total = sortedFaculty.length;
    const myCount = sortedFaculty.filter(f => f.isMyFaculty).length;
    const advisorCount = sortedFaculty.filter(f => f.roleBadge === 'Faculty Advisor' || f.roleBadge === 'Academic Advisor').length;
    const computingCount = sortedFaculty.filter(f => `${f.department} ${f.designation}`.toLowerCase().includes('comput')).length;
    const mathCount = sortedFaculty.filter(f => `${f.department} ${f.designation}`.toLowerCase().includes('mathemati')).length;
    return { total, myCount, advisorCount, computingCount, mathCount };
  }, [sortedFaculty]);

  const getRoleBadgeStyle = (_role?: string) => {
    return 'bg-black/5 dark:bg-white/5 text-[#111111] dark:text-[#FAFAFA] border border-black/10 dark:border-white/10';
  };

  const visibleFaculty = useMemo(() => {
    return filteredFaculty.slice(0, visibleCount);
  }, [filteredFaculty, visibleCount]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-6">
      {/* 1. Header Banner */}
      <div className="bento-card p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight lowercase text-[#111111] dark:text-[#FAFAFA]">
            faculty finder
          </h1>
          <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] lowercase mt-1 max-w-2xl leading-relaxed">
            official faculty profiles, departments and designations directly from srmist
          </p>
        </div>

        {/* Quick Summary Pill Stats */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 flex-wrap">
          <div className="px-3 py-2 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] text-center">
            <span className="block text-xs font-bold text-[#111111] dark:text-[#FAFAFA]">
              {stats.myCount}
            </span>
            <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
              my faculty
            </span>
          </div>
          <div className="px-3 py-2 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] text-center">
            <span className="block text-xs font-bold text-[#111111] dark:text-[#FAFAFA]">
              {stats.total.toLocaleString()}
            </span>
            <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
              total faculty
            </span>
          </div>
        </div>
      </div>

      {/* 2. Search & Filter Bar */}
      <div className="bento-card p-4 sm:p-5 space-y-4">
        {/* Search Input */}
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-[#71717A] dark:text-[#A1A1AA] absolute left-3.5 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="search by professor name, course code (e.g. 21csc201j), department, or designation..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] text-xs lowercase text-[#111111] dark:text-[#FAFAFA] placeholder-[#71717A] dark:placeholder-[#52525B] focus:outline-none focus:border-black/20 dark:focus:border-white/20 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => handleSearchChange('')}
              className="absolute right-3 text-xs text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA]"
            >
              clear
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs lowercase scrollbar-none">
          <SpringPress
            onClick={() => handleFilterChange('all')}
            className={`px-3 py-1 rounded-xl transition-colors cursor-pointer shrink-0 ${activeFilter === 'all'
              ? 'bg-black/10 dark:bg-white/10 font-bold text-[#111111] dark:text-[#FAFAFA]'
              : 'text-[#71717A] dark:text-[#A1A1AA] hover:bg-black/5 dark:hover:bg-white/5'
              }`}
          >
            all ({FACULTY_DIRECTORY.length})
          </SpringPress>
          <SpringPress
            onClick={() => handleFilterChange('my-faculty')}
            className={`px-3 py-1 rounded-xl transition-colors cursor-pointer shrink-0 ${activeFilter === 'my-faculty'
              ? 'bg-black/10 dark:bg-white/10 font-bold text-[#111111] dark:text-[#FAFAFA]'
              : 'text-[#71717A] dark:text-[#A1A1AA] hover:bg-black/5 dark:hover:bg-white/5'
              }`}
          >
            my teachers & advisors ({stats.myCount})
          </SpringPress>
          <SpringPress
            onClick={() => handleFilterChange('computing')}
            className={`px-3 py-1 rounded-xl transition-colors cursor-pointer shrink-0 ${activeFilter === 'computing'
              ? 'bg-black/10 dark:bg-white/10 font-bold text-[#111111] dark:text-[#FAFAFA]'
              : 'text-[#71717A] dark:text-[#A1A1AA] hover:bg-black/5 dark:hover:bg-white/5'
              }`}
          >
            computing tech
          </SpringPress>
          <SpringPress
            onClick={() => handleFilterChange('mathematics')}
            className={`px-3 py-1 rounded-xl transition-colors cursor-pointer shrink-0 ${activeFilter === 'mathematics'
              ? 'bg-black/10 dark:bg-white/10 font-bold text-[#111111] dark:text-[#FAFAFA]'
              : 'text-[#71717A] dark:text-[#A1A1AA] hover:bg-black/5 dark:hover:bg-white/5'
              }`}
          >
            mathematics
          </SpringPress>
          <SpringPress
            onClick={() => handleFilterChange('engineering')}
            className={`px-3 py-1 rounded-xl transition-colors cursor-pointer shrink-0 ${activeFilter === 'engineering'
              ? 'bg-black/10 dark:bg-white/10 font-bold text-[#111111] dark:text-[#FAFAFA]'
              : 'text-[#71717A] dark:text-[#A1A1AA] hover:bg-black/5 dark:hover:bg-white/5'
              }`}
          >
            engineering
          </SpringPress>
          <SpringPress
            onClick={() => handleFilterChange('sciences')}
            className={`px-3 py-1 rounded-xl transition-colors cursor-pointer shrink-0 ${activeFilter === 'sciences'
              ? 'bg-black/10 dark:bg-white/10 font-bold text-[#111111] dark:text-[#FAFAFA]'
              : 'text-[#71717A] dark:text-[#A1A1AA] hover:bg-black/5 dark:hover:bg-white/5'
              }`}
          >
            sciences & health
          </SpringPress>
        </div>
      </div>

      {/* 3. Faculty Grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredFaculty.length === 0 ? (
          <div className="col-span-full bento-card p-12 text-center text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase">
            no faculty members found matching "{searchQuery}".
          </div>
        ) : (
          visibleFaculty.map((f) => {
            const initials = f.name
              .replace(/Dr\.|Prof\.|Mr\.|Ms\.|Mrs\./gi, '')
              .trim()
              .split(' ')
              .filter(Boolean)
              .map(n => n[0])
              .join('')
              .toUpperCase()
              .slice(0, 2) || 'FA';

            return (
              <StaggerItem key={f.id}>
                <InteractiveBentoCard
                  className="p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-black/20 dark:hover:border-white/20 transition-all group h-full"
                >
                  {/* Top Section: Avatar, Name, Role */}
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center space-x-3 min-w-0">
                        {/* Avatar */}
                        {f.avatarUrl ? (
                          <img
                            src={f.avatarUrl}
                            alt={f.name}
                            loading="lazy"
                            className="w-10 h-10 rounded-2xl object-cover border border-black/[0.06] dark:border-white/[0.06] shrink-0"
                            onError={(e) => {
                              (e.currentTarget as HTMLElement).style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/[0.06] dark:border-white/[0.06] flex items-center justify-center font-bold text-xs text-[#111111] dark:text-[#FAFAFA] shrink-0">
                            {initials}
                          </div>
                        )}

                        <div className="min-w-0">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-bold text-sm text-[#111111] dark:text-[#FAFAFA] lowercase truncate">
                              {f.name}
                            </h3>
                          </div>
                          <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase truncate mt-0.5">
                            {f.designation}
                          </p>
                        </div>
                      </div>

                      {/* Role Badge */}
                      {f.roleBadge && (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full border shrink-0 lowercase ${getRoleBadgeStyle(f.roleBadge)}`}>
                          {f.roleBadge}
                        </span>
                      )}
                    </div>

                    {/* Department */}
                    {f.department && (
                      <div className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] lowercase truncate">
                        {f.department}
                      </div>
                    )}

                    {/* Specialization Area */}
                    {f.specialization && (
                      <div className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] lowercase line-clamp-2">
                        specialization: {f.specialization}
                      </div>
                    )}

                    {/* Cabin Location Pill (Only if present in data) */}
                    {f.cabin && (
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                        className="p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04] flex items-center space-x-2 text-xs"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#71717A] dark:text-[#A1A1AA] shrink-0" />
                        <span className="font-bold text-[#111111] dark:text-[#FAFAFA] lowercase truncate">
                          {f.cabin}
                        </span>
                        {f.building && (
                          <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase truncate">
                            ({f.building})
                          </span>
                        )}
                      </motion.div>
                    )}

                    {/* Courses Taught (if any) */}
                    {f.coursesTaught && f.coursesTaught.length > 0 && (
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase block">
                          courses taught:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {f.coursesTaught.map(c => (
                            <span
                              key={c.code}
                              title={c.title}
                              className="text-[10px] px-2.5 py-1 rounded-xl bg-black/5 dark:bg-white/5 border border-black/[0.04] dark:border-white/[0.04] text-[#111111] dark:text-[#FAFAFA] lowercase flex items-center space-x-1.5"
                            >
                              <span className="font-semibold">{c.code}</span>
                              {c.title && (
                                <span className="text-[#71717A] dark:text-[#A1A1AA] truncate max-w-[200px]">
                                  • {c.title.toLowerCase()}
                                </span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Contact Info: Visible Email and Phone if available */}
                    {(f.email || f.phone) && (
                      <div className="space-y-1.5 pt-1 text-xs">
                        {f.email && (
                          <div className="flex items-center space-x-2 text-[#71717A] dark:text-[#A1A1AA]">
                            <Mail className="w-3.5 h-3.5 shrink-0 text-[#111111] dark:text-[#FAFAFA]" />
                            <a
                              href={`mailto:${f.email}`}
                              title={`Send email to ${f.name}`}
                              className="text-[#111111] dark:text-[#FAFAFA] hover:underline underline-offset-2 truncate lowercase"
                            >
                              {f.email}
                            </a>
                          </div>
                        )}
                        {f.phone && (
                          <div className="flex items-center space-x-2 text-[#71717A] dark:text-[#A1A1AA]">
                            <Phone className="w-3.5 h-3.5 shrink-0 text-[#111111] dark:text-[#FAFAFA]" />
                            <a
                              href={`tel:${f.phone.replace(/\s+/g, '')}`}
                              title={`Call ${f.name}`}
                              className="text-[#111111] dark:text-[#FAFAFA] hover:underline underline-offset-2 truncate"
                            >
                              {f.phone}
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Bottom Section: Contact & Quick Actions */}
                  <div className="pt-3 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between gap-2">
                    <div className="flex items-center space-x-2 min-w-0">
                      {/* Mailto Action */}
                      {f.email && (
                        <motion.a
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.92 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          href={`mailto:${f.email}`}
                          title={`Send email to ${f.email}`}
                          className="p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5" />
                        </motion.a>
                      )}

                      {/* Tel Action (if available) */}
                      {f.phone && (
                        <motion.a
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.92 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          href={`tel:${f.phone.replace(/\s+/g, '')}`}
                          title={`Call ${f.phone}`}
                          className="p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5" />
                        </motion.a>
                      )}

                      {/* Copy Email Button (if available) */}
                      {f.email && (
                        <SpringPress
                          onClick={() => copyToClipboard(f.email!, f.id)}
                          scaleHover={1.04}
                          scaleTap={0.96}
                          title="Copy official email"
                          className="px-2 py-1 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/5 dark:hover:bg-white/5 text-[10px] text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] flex items-center space-x-1 transition-colors cursor-pointer"
                        >
                          {copiedId === f.id ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span>copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span className="truncate max-w-[120px]">{f.email}</span>
                            </>
                          )}
                        </SpringPress>
                      )}

                      {/* Profile URL Link */}
                      {f.profileUrl && (
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                          href={f.profileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View official profile on SRM portal"
                          className="p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors flex items-center space-x-1"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span className="text-[10px] lowercase hidden sm:inline">profile</span>
                        </motion.a>
                      )}
                    </div>

                    {f.empId && (
                      <span className="text-[10px] text-[#71717A] dark:text-[#52525B] shrink-0">
                        id: {f.empId}
                      </span>
                    )}
                  </div>
                </InteractiveBentoCard>
              </StaggerItem>
            );
          })
        )}
      </StaggerContainer>

      {/* 4. Load More Button */}
      {visibleCount < filteredFaculty.length && (
        <div className="pt-4 pb-12 flex flex-col items-center justify-center space-y-2">
          <SpringPress
            onClick={() => setVisibleCount((prev) => prev + 60)}
            scaleHover={1.02}
            scaleTap={0.98}
            className="px-6 py-2.5 rounded-2xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-xs font-medium text-[#111111] dark:text-[#FAFAFA] lowercase transition-colors cursor-pointer"
          >
            load more ({Math.min(60, filteredFaculty.length - visibleCount)} more)
          </SpringPress>
          <span className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
            showing {visibleFaculty.length} of {filteredFaculty.length.toLocaleString()} faculty members
          </span>
        </div>
      )}
    </div>
  );
};
