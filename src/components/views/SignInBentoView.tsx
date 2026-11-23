import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSession } from '../../context/SessionContext';
import { 
  ArrowRight, 
  ShieldCheck, 
  User, 
  Lock, 
  AlertCircle, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  CalendarDays, 
  Award, 
  BookOpen, 
  Sparkles
} from 'lucide-react';

export const SignInBentoView: React.FC = () => {
  const { login, isLoading, error } = useSession();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim() || !password.trim()) {
      setLocalError('please enter both netid and password');
      return;
    }
    setLocalError(null);
    const res = await login(identifier.trim(), password.trim());
    if (!res.success) {
      setLocalError(res.message || 'authentication failed');
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[var(--color-canvas)] text-[var(--color-text-primary)] overflow-hidden select-none">
      {/* 1. Subtle Minimal Geometric Grid Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.05] [background-image:radial-gradient(#000000_1px,transparent_1px)] dark:[background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]"
      />

      {/* 2. Soft Ambient Atmospheric Light Spheres (Apple Pro Minimal) */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -left-28 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-500/10 to-violet-500/5 blur-[128px] pointer-events-none animate-pulse"
        style={{ animationDuration: '8s' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 -right-28 w-96 h-96 rounded-full bg-gradient-to-bl from-emerald-500/10 to-teal-500/5 blur-[128px] pointer-events-none animate-pulse"
        style={{ animationDuration: '10s' }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full bg-blue-500/[0.03] blur-[160px] pointer-events-none"
      />

      {/* 3. Main Bento Container: Split Showcase & Sign-In */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
      >
        {/* Left Column: Interactive Feature Showcase Bento (lg:col-span-7) */}
        <div className="lg:col-span-7 bento-card p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 relative overflow-hidden backdrop-blur-xl">
          {/* Subtle Ambient Background Highlight */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/[0.06] dark:from-white/[0.03] to-transparent pointer-events-none rounded-full blur-2xl -mr-16 -mt-16" />

          {/* Top Brand & Status Row */}
          <div className="flex items-center justify-between gap-3 z-10">
            <div className="flex items-center space-x-2.5">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-sm shadow-sm transition-colors"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-accent-text)'
                }}
              >
                a+
              </div>
              <div>
                <span className="text-xs font-bold tracking-tight text-[#111111] dark:text-[#FAFAFA] lowercase">
                  academia plus
                </span>
                <span className="block text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
                  srm academic intelligence
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-[11px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>live gateway</span>
            </div>
          </div>

          {/* Core Vision Typography */}
          <div className="z-10 my-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#111111] dark:text-[#FAFAFA] lowercase leading-tight">
              elevate your academic intelligence.
            </h1>
            <p className="text-xs sm:text-sm text-[#71717A] dark:text-[#A1A1AA] lowercase mt-2 leading-relaxed max-w-lg">
              real-time 75% attendance margin calculus, official 12-period cycle timetables, predicted gpa analytics and university notes repository.
            </p>
          </div>

          {/* Feature Bento Micro-Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 z-10">
            {/* 1. Attendance Intelligence */}
            <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.06] space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center space-x-1.5 text-[#111111] dark:text-[#FAFAFA] font-semibold lowercase">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>attendance margin</span>
                </span>
                <span className="text-[10px] font-bold text-emerald-500 lowercase">
                  can skip 10
                </span>
              </div>
              <div className="w-full h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[77%]" />
              </div>
              <div className="flex items-center justify-between text-[10px] text-[#71717A] dark:text-[#A1A1AA]">
                <span>77.1% attended</span>
                <span>283 of 367 hrs</span>
              </div>
            </div>

            {/* 2. Cycle Timetable */}
            <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.06] space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center space-x-1.5 text-[#111111] dark:text-[#FAFAFA] font-semibold lowercase">
                  <CalendarDays className="w-3.5 h-3.5 text-blue-500" />
                  <span>cycle timetable</span>
                </span>
                <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
                  combo batch 2
                </span>
              </div>
              <p className="text-[11px] font-medium text-[#111111] dark:text-[#FAFAFA] truncate lowercase">
                12 periods • tech park & university building
              </p>
              <div className="flex items-center justify-between text-[10px] text-[#71717A] dark:text-[#A1A1AA]">
                <span>days 1 to 5</span>
                <span className="text-blue-500">tp 706</span>
              </div>
            </div>

            {/* 3. GPA Predictor */}
            <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.06] space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center space-x-1.5 text-[#111111] dark:text-[#FAFAFA] font-semibold lowercase">
                  <Award className="w-3.5 h-3.5 text-amber-500" />
                  <span>predicted gpa</span>
                </span>
                <span className="text-[10px] font-bold text-[#111111] dark:text-[#FAFAFA]">
                  8.61 gpa
                </span>
              </div>
              <div className="w-full h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 w-[73%]" />
              </div>
              <div className="flex items-center justify-between text-[10px] text-[#71717A] dark:text-[#A1A1AA]">
                <span>23 credits</span>
                <span>393.7 / 540 marks</span>
              </div>
            </div>

            {/* 4. Notes Repository */}
            <div className="p-3.5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.05] dark:border-white/[0.06] space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center space-x-1.5 text-[#111111] dark:text-[#FAFAFA] font-semibold lowercase">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
                  <span>notes repository</span>
                </span>
                <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
                  98 subjects
                </span>
              </div>
              <p className="text-[11px] font-medium text-[#111111] dark:text-[#FAFAFA] truncate lowercase">
                unit-wise slides, notes & pyqs
              </p>
              <div className="flex items-center justify-between text-[10px] text-[#71717A] dark:text-[#A1A1AA]">
                <span>verified repository</span>
                <span className="text-indigo-500">in-browser pdf</span>
              </div>
            </div>
          </div>

          {/* Security & Architecture Statement */}
          <div className="pt-3 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase z-10">
            <span className="flex items-center space-x-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>zero database storage • direct tls proxy</span>
            </span>
            <span>apple-grade elegance</span>
          </div>
        </div>

        {/* Right Column: Glass Bento Sign-In Card (lg:col-span-5) */}
        <div className="lg:col-span-5 bento-card p-6 sm:p-8 flex flex-col justify-between backdrop-blur-2xl bg-white/80 dark:bg-[#131316]/85 border border-black/[0.08] dark:border-white/[0.08] shadow-2xl">
          <div>
            {/* Card Header */}
            <div className="mb-6">
              <div className="flex items-center space-x-1.5 text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>secure academia authentication</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight lowercase text-[#111111] dark:text-[#FAFAFA]">
                sign in to workspace
              </h2>
              <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-1">
                enter your netid and academia password to load your live academic profile
              </p>
            </div>

            {/* Error Alert */}
            {(localError || error) && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-5 p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-start space-x-2 text-xs text-rose-500 dark:text-rose-400 lowercase"
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{localError || error}</span>
              </motion.div>
            )}

            {/* Sign-In Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* NetID Input */}
              <div>
                <label className="block text-[11px] font-medium text-[#71717A] dark:text-[#A1A1AA] lowercase mb-1.5">
                  netid / srm email
                </label>
                <div className="relative">
                  <User className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71717A] dark:text-[#A1A1AA]" />
                  <input
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="netid or srmist email (e.g. ab1234)"
                    className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-xs text-[#111111] dark:text-[#FAFAFA] placeholder-[#71717A] dark:placeholder-[#52525B] focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-all"
                    required
                    autoComplete="username"
                  />
                </div>
              </div>

              {/* Password Input with Show/Hide Toggle */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-[11px] font-medium text-[#71717A] dark:text-[#A1A1AA] lowercase">
                    academia password
                  </label>
                </div>
                <div className="relative">
                  <Lock className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71717A] dark:text-[#A1A1AA]" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-9 pr-10 py-2.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08] text-xs text-[#111111] dark:text-[#FAFAFA] placeholder-[#71717A] dark:placeholder-[#52525B] focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-all"
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(prev => !prev)}
                    title={showPassword ? 'hide password' : 'show password'}
                    aria-label={showPassword ? 'hide password' : 'show password'}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors p-1 cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOff className="w-3.5 h-3.5" />
                    ) : (
                      <Eye className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-2xl font-semibold text-xs lowercase transition-all hover:opacity-90 active:scale-[0.99] disabled:opacity-50 mt-5 shadow-sm cursor-pointer"
                style={{
                  backgroundColor: 'var(--color-accent)',
                  color: 'var(--color-accent-text)'
                }}
              >
                <span>{isLoading ? 'connecting to srmist...' : 'sign in to academia'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Direct Proxy Guarantee Note */}
            <div className="mt-4 pt-3 border-t border-black/[0.04] dark:border-white/[0.04] flex items-center justify-between text-[11px] text-[#71717A] dark:text-[#A1A1AA]">
              <span className="lowercase">end-to-end direct TLS proxy</span>
              <span className="text-[10px] lowercase text-emerald-500 font-medium">zero credential logging</span>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="mt-6 pt-3 border-t border-black/[0.06] dark:border-white/[0.06] text-center text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase">
            authenticates directly with academia.srmist.edu.in
          </div>
        </div>
      </motion.div>
    </div>
  );
};

