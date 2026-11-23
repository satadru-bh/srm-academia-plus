import React, { useState } from 'react';
import { useSession } from '../../context/SessionContext';
import { GraduationCap, ArrowRight, ShieldCheck, Lock, User, AlertCircle } from 'lucide-react';

export const SignInView: React.FC = () => {
  const { login, isLoading, error } = useSession();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier.trim() || !password.trim()) {
      setLocalError('Please enter both NetID and password');
      return;
    }
    setLocalError(null);
    const res = await login(identifier.trim(), password.trim());
    if (!res.success) {
      setLocalError(res.message || 'Login failed. Please verify credentials.');
    }
  };

  const handleDemoLogin = async () => {
    setIdentifier('demo');
    setPassword('demo');
    setLocalError(null);
    await login('demo', 'demo');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-[#F5F5F7] dark:bg-[#000000]">
      <div className="w-full max-w-md">
        {/* Apple Centered Card */}
        <div className="bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10] rounded-2xl p-8 shadow-sm">
          {/* Header Icon */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-[#007AFF] dark:bg-[#0A84FF] flex items-center justify-center text-white mb-4 shadow-sm">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
              SRM Academia
            </h1>
            <p className="text-sm text-[#6E6E73] dark:text-[#98989D] mt-1">
              Sign in with your NetID to access attendance, timetable, and internal marks
            </p>
          </div>

          {(localError || error) && (
            <div className="mb-6 p-3.5 rounded-xl bg-[#FF3B30]/10 border border-[#FF3B30]/20 flex items-start space-x-2.5 text-xs text-[#FF3B30] dark:text-[#FF453A]">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{localError || error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#6E6E73] dark:text-[#98989D] mb-1.5 uppercase tracking-wider">
                NetID or SRM Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#86868B]">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="e.g. ab1234 or ab1234@srmist.edu.in"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F5F5F7] dark:bg-[#2C2C2E] border border-black/[0.08] dark:border-white/[0.10] text-[#1D1D1F] dark:text-[#F5F5F7] placeholder-[#86868B] text-sm focus:outline-none focus:ring-2 focus:ring-[#007AFF] dark:focus:ring-[#0A84FF] transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#6E6E73] dark:text-[#98989D] mb-1.5 uppercase tracking-wider">
                Academia Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#86868B]">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#F5F5F7] dark:bg-[#2C2C2E] border border-black/[0.08] dark:border-white/[0.10] text-[#1D1D1F] dark:text-[#F5F5F7] placeholder-[#86868B] text-sm focus:outline-none focus:ring-2 focus:ring-[#007AFF] dark:focus:ring-[#0A84FF] transition-all"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-[#007AFF] hover:bg-[#0062CC] dark:bg-[#0A84FF] dark:hover:bg-[#0071E3] text-white font-medium text-sm transition-all shadow-sm disabled:opacity-50 mt-6"
            >
              <span>{isLoading ? 'Connecting to SRM...' : 'Sign In'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Preview Option */}
          <div className="mt-6 pt-6 border-t border-black/[0.08] dark:border-white/[0.10]">
            <button
              type="button"
              onClick={handleDemoLogin}
              disabled={isLoading}
              className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-[#F5F5F7] dark:bg-[#2C2C2E] hover:bg-[#EBEBED] dark:hover:bg-[#3A3A3C] text-[#1D1D1F] dark:text-[#F5F5F7] text-xs font-medium border border-black/[0.08] dark:border-white/[0.10] transition-colors"
            >
              <span>Explore Instant Demo</span>
            </button>
          </div>

          {/* Security Notice */}
          <div className="mt-6 flex items-center justify-center space-x-1.5 text-[11px] text-[#6E6E73] dark:text-[#98989D]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#34C759] dark:text-[#30D158]" />
            <span>Zero database • Credentials securely verified directly with SRM</span>
          </div>
        </div>
      </div>
    </div>
  );
};
