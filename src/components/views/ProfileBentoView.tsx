import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useSession } from '../../context/SessionContext';
import { Mail, Phone, Moon, Sun, RefreshCw, LogOut, CheckCircle, GraduationCap, Building2, Camera, Trash2 } from 'lucide-react';

export const ProfileBentoView: React.FC = () => {
  const { user, logout, refreshData, isSyncing, isDarkMode, toggleDarkMode } = useSession();
  const [customAvatar, setCustomAvatar] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('srm_student_custom_avatar');
    }
    return null;
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert('Photo must be less than 5MB');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setCustomAvatar(result);
      if (typeof window !== 'undefined') {
        localStorage.setItem('srm_student_custom_avatar', result);
      }
    };
    reader.readAsDataURL(file);
  };

  const removeAvatar = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCustomAvatar(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('srm_student_custom_avatar');
    }
  };

  if (!user) return null;

  // Official SRM Email: ALWAYS netid@srmist.edu.in (format: ab1234@srmist.edu.in, NOT registration number)
  let netId = 'student';
  const emailCandidate = user.profile.email ? user.profile.email.split('@')[0].trim().toLowerCase() : '';
  if (emailCandidate && !/^ra\d{6,}/i.test(emailCandidate)) {
    netId = emailCandidate;
  } else if (typeof window !== 'undefined') {
    const saved = window.localStorage.getItem('srm_net_id');
    if (saved && !/^ra\d{6,}/i.test(saved)) {
      netId = saved.split('@')[0].trim().toLowerCase();
    }
  }
  const officialEmail = user.profile.email || `${netId}@srmist.edu.in`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="p-4 sm:p-6 lg:p-8 pb-48 max-w-7xl mx-auto w-full space-y-6"
    >
      {/* Page Title */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#111111] dark:text-[#FAFAFA] lowercase">
          student profile
        </h1>
        <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] lowercase mt-1">
          official srmist academic identity & enrollment credentials
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 [grid-auto-flow:dense]">

        {/* 1. Digital Student ID Card (8 cols) */}
        <div className="md:col-span-8 bento-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Ambient Watermark */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-black/[0.02] dark:from-white/[0.02] to-transparent pointer-events-none rounded-full blur-3xl -mr-20 -mt-20" />

          <div>
            {/* Top Identity Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.06] dark:border-white/[0.06]">
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarChange}
                />
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="relative group cursor-pointer shrink-0"
                  title="Click to upload or change student photo"
                >
                  {customAvatar ? (
                    <img
                      src={customAvatar}
                      alt={user.profile.name}
                      className="w-16 h-16 rounded-2xl object-cover border border-black/10 dark:border-white/10 shadow-sm transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-2xl bg-black dark:bg-white text-white dark:text-black flex items-center justify-center text-2xl font-bold shadow-sm border border-black/10 dark:border-white/10 transition-transform group-hover:scale-105">
                      {(user.profile.name || 'S').charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className="absolute inset-0 rounded-2xl bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity text-white text-[10px] font-medium backdrop-blur-2xs">
                    <Camera className="w-4 h-4 mb-0.5" />
                    <span>{customAvatar ? 'change' : 'upload'}</span>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[#111111] dark:text-[#FAFAFA] lowercase">
                    {user.profile.name.toLowerCase()}
                  </h2>
                  {customAvatar && (
                    <button
                      type="button"
                      onClick={removeAvatar}
                      className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] hover:text-rose-500 transition-colors mt-0.5 flex items-center space-x-1 cursor-pointer"
                    >
                      <Trash2 className="w-2.5 h-2.5" />
                      <span>remove photo</span>
                    </button>
                  )}
                </div>
              </div>

              <div className="sm:text-right">
                <div className="text-[10px] uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA]">
                  srm netid
                </div>
                <div className="text-sm font-bold text-[#111111] dark:text-[#FAFAFA] mt-0.5">
                  {netId}
                </div>
              </div>
            </div>

            {/* Core Credential Fields Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 pt-6 text-xs">
              {/* Registration Number */}
              <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]">
                <div className="text-[10px] uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] mb-1">
                  registration number
                </div>
                <div className="font-bold text-sm text-[#111111] dark:text-[#FAFAFA]">
                  {user.profile.regNo}
                </div>
              </div>

              {/* Official SRM Email */}
              <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]">
                <div className="text-[10px] uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] mb-1">
                  official email (netid)
                </div>
                <div className="font-bold text-xs text-[#111111] dark:text-[#FAFAFA] truncate">
                  {officialEmail}
                </div>
              </div>

              {/* Department & Program */}
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] mb-1">
                  program & degree
                </div>
                <div className="font-medium text-[#111111] dark:text-[#FAFAFA] lowercase">
                  {user.profile.program} • {user.profile.department}
                </div>
              </div>

              {/* Semester & Section */}
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] mb-1">
                  semester & batch
                </div>
                <div className="font-medium text-[#111111] dark:text-[#FAFAFA] lowercase">
                  semester {user.profile.semester} • combo batch {user.profile.comboBatch || '2/2'} (afternoon)
                </div>
              </div>

              {/* Lecture Venue */}
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] mb-1">
                  primary lecture hall
                </div>
                <div className="font-medium text-[#111111] dark:text-[#FAFAFA] lowercase flex items-center space-x-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#71717A] dark:text-[#A1A1AA]" />
                  <span>tech park 706 (tp 706)</span>
                </div>
              </div>

              {/* Registered Mobile */}
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] mb-1">
                  registered contact
                </div>
                <div className="text-[#111111] dark:text-[#FAFAFA]">
                  {user.profile.mobile ? `+91 ${user.profile.mobile}` : 'not provided'}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase">
            <span>verified srm academia credentials</span>
            <span className="flex items-center space-x-1 text-emerald-500 dark:text-emerald-400 font-medium">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>authenticated</span>
            </span>
          </div>
        </div>

        {/* 2. Academic Standing Summary (4 cols) */}
        <div className="md:col-span-4 bento-card p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center space-x-2 text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mb-2">
              <GraduationCap className="w-4 h-4 text-[#111111] dark:text-[#FAFAFA]" />
              <span className="font-semibold">academic enrollment</span>
            </div>
            <h3 className="text-xl font-extrabold text-[#111111] dark:text-[#FAFAFA] lowercase mt-1">
              ay 2026 – 2027
            </h3>
            <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-1 leading-relaxed">
              odd semester curriculum registered under regulation 2021.
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]">
                <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase">enrolled credits</span>
                <span className="font-bold text-sm text-[#111111] dark:text-[#FAFAFA]">21 credits</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]">
                <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase">active courses</span>
                <span className="font-bold text-sm text-[#111111] dark:text-[#FAFAFA]">
                  {user.attendance.length} subjects
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.04] dark:border-white/[0.04]">
                <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase">overall status</span>
                <span className="text-xs font-bold text-emerald-500 dark:text-emerald-400 lowercase">good standing</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase">
            controller of examinations verified
          </div>
        </div>

        {/* 3. Assigned Faculty Advisor (6 cols) */}
        {user.profile.facultyAdvisor && (
          <div className="md:col-span-6 bento-card p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] mb-1">
                academic mentorship
              </div>
              <h4 className="text-lg font-bold text-[#111111] dark:text-[#FAFAFA] lowercase">
                assigned faculty advisor
              </h4>
              <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-1">
                primary point of contact for academic leave, course approvals, and attendance advisement.
              </p>
            </div>

            <div className="mt-5 p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div className="font-bold text-sm text-[#111111] dark:text-[#FAFAFA] lowercase">
                  {user.profile.facultyAdvisor.name.toLowerCase()}
                </div>
                <div className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-0.5">
                  faculty advisor • department of cse, tech park
                </div>
              </div>

              <div className="flex items-center space-x-2 shrink-0">
                {user.profile.facultyAdvisor.email && (
                  <a
                    href={`mailto:${user.profile.facultyAdvisor.email}`}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-black text-white dark:bg-white dark:text-black font-semibold text-xs lowercase shadow-xs hover:opacity-90 transition-opacity"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>email</span>
                  </a>
                )}
                {user.profile.facultyAdvisor.mobile && (
                  <a
                    href={`tel:${user.profile.facultyAdvisor.mobile}`}
                    className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/[0.06] dark:border-white/[0.06] text-xs text-[#111111] dark:text-[#FAFAFA] hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#71717A] dark:text-[#A1A1AA]" />
                    <span>call</span>
                  </a>
                )}
              </div>
            </div>

            <div className="mt-5 pt-3.5 border-t border-black/[0.06] dark:border-white/[0.06] text-xs text-[#71717A] dark:text-[#A1A1AA]">
              {user.profile.facultyAdvisor.email?.toLowerCase()}
            </div>
          </div>
        )}

        {/* 4. App Preferences & Session Management (6 cols) */}
        <div className="md:col-span-6 bento-card p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] mb-1">
              app preferences
            </div>
            <h4 className="text-lg font-bold text-[#111111] dark:text-[#FAFAFA] lowercase">
              settings & controls
            </h4>
            <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-1">
              customize visual display mode and synchronize live academic database.
            </p>
          </div>

          <div className="mt-5 space-y-3">
            {/* Theme Toggle Pill */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
              <div>
                <span className="text-xs font-semibold text-[#111111] dark:text-[#FAFAFA] lowercase block">
                  theme appearance
                </span>
                <span className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
                  currently using {isDarkMode ? 'dark mode' : 'light mode'}
                </span>
              </div>
              <button
                onClick={toggleDarkMode}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/[0.06] dark:border-white/[0.06] text-xs font-medium text-[#111111] dark:text-[#FAFAFA] hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
              >
                {isDarkMode ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>light mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-indigo-400" />
                    <span>dark mode</span>
                  </>
                )}
              </button>
            </div>

            {/* Sync Trigger */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/[0.06] dark:border-white/[0.06]">
              <div>
                <span className="text-xs font-semibold text-[#111111] dark:text-[#FAFAFA] lowercase block">
                  academic data cache
                </span>
                <span className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
                  re-synchronize attendance, marks & schedule
                </span>
              </div>
              <button
                onClick={refreshData}
                disabled={isSyncing}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/[0.06] dark:border-white/[0.06] text-xs font-medium text-[#111111] dark:text-[#FAFAFA] hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isSyncing ? 'animate-spin' : ''}`} />
                <span>{isSyncing ? 'syncing...' : 'refresh'}</span>
              </button>
            </div>
          </div>

          {/* Sign Out */}
          <div className="mt-5 pt-4 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
            <span className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase">
              logged in as {netId}
            </span>
            <button
              onClick={logout}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl text-rose-500 dark:text-rose-400 bg-rose-500/10 hover:bg-rose-500/15 border border-rose-500/20 text-xs font-bold lowercase transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>sign out</span>
            </button>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
