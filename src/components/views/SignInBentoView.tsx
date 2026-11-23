import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSession } from '../../context/SessionContext';
import { ArrowRight, User, Lock, AlertCircle, Eye, EyeOff } from 'lucide-react';

export const SignInBentoView: React.FC = () => {
  const { login, isLoading, error } = useSession();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const errorMessage = localError || error;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim() || !password.trim()) {
      setLocalError('enter both netid and password');
      return;
    }
    setLocalError(null);
    const res = await login(identifier.trim(), password.trim());
    if (!res.success) {
      setLocalError(res.message || 'incorrect credentials');
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 bg-[var(--color-canvas)] text-[var(--color-text-primary)] overflow-hidden select-none">
      {/* 1. Organic Living Ambient Aurora Orbs */}
      <motion.div
        aria-hidden="true"
        className="absolute top-1/4 -left-20 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-transparent blur-[120px] pointer-events-none"
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -40, 25, 0],
          scale: [1, 1.12, 0.94, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-1/4 -right-20 w-[440px] h-[440px] rounded-full bg-gradient-to-bl from-emerald-500/12 via-teal-500/10 to-transparent blur-[130px] pointer-events-none"
        animate={{
          x: [0, -35, 30, 0],
          y: [0, 35, -25, 0],
          scale: [1, 0.95, 1.14, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 2. Subtle Micro-Dot Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035] dark:opacity-[0.05] [background-image:radial-gradient(#000000_1px,transparent_1px)] dark:[background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
      />

      {/* 3. Centered Minimalist Glass Masterpiece Card */}
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={
          errorMessage
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
                x: [-6, 6, -4, 4, -2, 2, 0],
                transition: { duration: 0.45, ease: 'easeInOut' },
              }
            : { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
        }
        className="relative z-10 w-full max-w-[390px]"
      >
        <div className="bento-card p-7 sm:p-9 rounded-[32px] backdrop-blur-2xl bg-white/80 dark:bg-[#121214]/80 border border-black/[0.06] dark:border-white/[0.08] shadow-2xl shadow-black/[0.04] dark:shadow-black/50 space-y-6">
          {/* Header & Logo Squircle */}
          <div className="flex flex-col items-center text-center">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="w-13 h-13 rounded-2xl bg-black text-white dark:bg-white dark:text-black flex items-center justify-center font-bold text-lg tracking-tight mb-4 shadow-sm cursor-default"
            >
              a+
            </motion.div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight lowercase text-[#111111] dark:text-[#FAFAFA]">
              academia plus
            </h1>
            <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-1">
              sign in with your netid
            </p>
          </div>

          {/* Animated Error Pill */}
          <AnimatePresence mode="wait">
            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -6, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -6, height: 0 }}
                transition={{ duration: 0.2 }}
                className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center space-x-2 text-xs text-rose-600 dark:text-rose-400 lowercase overflow-hidden"
              >
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{errorMessage}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {/* NetID Input */}
            <div>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71717A] dark:text-[#A1A1AA] pointer-events-none" />
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => {
                    setIdentifier(e.target.value);
                    if (localError) setLocalError(null);
                  }}
                  placeholder="netid or srm email"
                  className="w-full pl-10 pr-4 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-xs text-[#111111] dark:text-[#FAFAFA] placeholder-[#71717A] dark:placeholder-[#52525B] focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-all lowercase"
                  required
                  autoComplete="username"
                  autoFocus
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#71717A] dark:text-[#A1A1AA] pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (localError) setLocalError(null);
                  }}
                  placeholder="academia password"
                  className="w-full pl-10 pr-10 py-3 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] text-xs text-[#111111] dark:text-[#FAFAFA] placeholder-[#71717A] dark:placeholder-[#52525B] focus:outline-none focus:border-black/30 dark:focus:border-white/30 transition-all"
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  title={showPassword ? 'hide password' : 'show password'}
                  aria-label={showPassword ? 'hide password' : 'show password'}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors p-1 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Tactile Pill Action Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="w-full group flex items-center justify-center space-x-2 py-3 px-5 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold text-xs lowercase transition-all disabled:opacity-50 mt-4 shadow-sm cursor-pointer"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white/30 dark:border-black/30 border-t-white dark:border-t-black rounded-full animate-spin" />
              ) : (
                <>
                  <span>sign in</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </motion.button>
          </form>

          {/* Minimal Whisper Footer */}
          <div className="pt-2 text-center text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase opacity-60">
            campusweb gateway
          </div>
        </div>
      </motion.div>
    </div>
  );
};
