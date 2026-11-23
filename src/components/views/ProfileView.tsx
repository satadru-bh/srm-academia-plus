import React, { useState } from 'react';
import { useSession } from '../../context/SessionContext';
import { Mail, LogOut, CheckCircle2, Lock } from 'lucide-react';

export const ProfileView: React.FC = () => {
  const { user, logout, isStudentPortalActive, loginStudentPortal } = useSession();
  const [spPassword, setSpPassword] = useState('Sata2008#');
  const [spLoading, setSpLoading] = useState(false);
  const [spMessage, setSpMessage] = useState<string | null>(null);

  if (!user) return null;

  const handleConnectSP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!spPassword.trim()) return;
    setSpLoading(true);
    setSpMessage(null);
    const res = await loginStudentPortal(spPassword.trim());
    setSpLoading(false);
    if (res.success) {
      setSpMessage('Student Portal connected successfully! Session is now persistent.');
    } else {
      setSpMessage(res.message || 'Connection failed');
    }
  };

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-4xl mx-auto w-full">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
          Student Profile & Portals
        </h2>
        <p className="text-sm text-[#6E6E73] dark:text-[#98989D] mt-1">
          Academic credentials and multi-portal session status (SRM Academia & Student Portal)
        </p>
      </div>

      {/* Main Info Card */}
      <div className="p-6 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10] space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-2xl bg-[#007AFF] dark:bg-[#0A84FF] text-white flex items-center justify-center text-2xl font-bold">
            {(user.profile.name || 'S').charAt(0)}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              {user.profile.name}
            </h3>
            <div className="text-sm text-[#007AFF] dark:text-[#0A84FF] mt-0.5">
              {user.profile.regNo}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-black/[0.06] dark:border-white/[0.08] text-sm">
          <div>
            <div className="text-xs text-[#6E6E73] dark:text-[#98989D] uppercase tracking-wider mb-1">
              Department & Section
            </div>
            <div className="font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
              {user.profile.department}
            </div>
          </div>

          <div>
            <div className="text-xs text-[#6E6E73] dark:text-[#98989D] uppercase tracking-wider mb-1">
              Program & Semester
            </div>
            <div className="font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
              {user.profile.program} • Semester {user.profile.semester}
            </div>
          </div>

          <div>
            <div className="text-xs text-[#6E6E73] dark:text-[#98989D] uppercase tracking-wider mb-1">
              Batch Allocation
            </div>
            <div className="font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
              Combo Batch {user.profile.comboBatch || '2/2'}
            </div>
          </div>

          <div>
            <div className="text-xs text-[#6E6E73] dark:text-[#98989D] uppercase tracking-wider mb-1">
              Official Email
            </div>
            <div className="text-xs text-[#1D1D1F] dark:text-[#F5F5F7]">
              {user.profile.email}
            </div>
          </div>
        </div>
      </div>

      {/* Dual Portal Connection Engine */}
      <div className="p-6 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10] space-y-4">
        <div>
          <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
            Upstream Portals Authentication
          </h3>
          <p className="text-xs text-[#6E6E73] dark:text-[#98989D] mt-0.5">
            Sessions remain persistent across refreshes until rejected by upstream servers (HTTP 401)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {/* Academia Portal Status */}
          <div className="p-4 rounded-xl bg-[#F5F5F7] dark:bg-[#2C2C2E] border border-black/[0.06] dark:border-white/[0.08] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                SRM Academia Portal
              </span>
              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#34C759]/15 text-[#34C759] dark:text-[#30D158] border border-[#34C759]/30">
                <CheckCircle2 className="w-3 h-3" />
                <span>Connected & Persistent</span>
              </span>
            </div>
            <p className="text-[11px] text-[#6E6E73] dark:text-[#98989D]">
              Synchronizes course attendance, 5-day cycle timetable, and internal marks.
            </p>
          </div>

          {/* Student Portal Status */}
          <div className="p-4 rounded-xl bg-[#F5F5F7] dark:bg-[#2C2C2E] border border-black/[0.06] dark:border-white/[0.08] space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                SRM Student Portal
              </span>
              {isStudentPortalActive ? (
                <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#34C759]/15 text-[#34C759] dark:text-[#30D158] border border-[#34C759]/30">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Connected & Persistent</span>
                </span>
              ) : (
                <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-[#FF9500]/15 text-[#FF9500] dark:text-[#FF9F0A] border border-[#FF9500]/30">
                  <span>Not Linked</span>
                </span>
              )}
            </div>
            <p className="text-[11px] text-[#6E6E73] dark:text-[#98989D]">
              Synchronizes semester results, fees, hall tickets, and unified portal data.
            </p>

            {!isStudentPortalActive && (
              <form onSubmit={handleConnectSP} className="pt-2 flex items-center space-x-2">
                <div className="relative flex-1">
                  <Lock className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-[#86868B]" />
                  <input
                    type="password"
                    value={spPassword}
                    onChange={(e) => setSpPassword(e.target.value)}
                    placeholder="Student Portal password"
                    className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10] text-xs text-[#1D1D1F] dark:text-[#F5F5F7]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={spLoading}
                  className="px-3 py-1.5 rounded-lg bg-[#007AFF] dark:bg-[#0A84FF] text-white text-xs font-medium hover:opacity-90 disabled:opacity-50 shrink-0"
                >
                  {spLoading ? 'Connecting...' : 'Connect'}
                </button>
              </form>
            )}

            {spMessage && (
              <div className="text-[11px] text-[#007AFF] dark:text-[#0A84FF] mt-1">
                {spMessage}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Advisor Information */}
      {user.profile.facultyAdvisor && (
        <div className="p-6 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10]">
          <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] mb-4">
            Assigned Faculty Advisor
          </h3>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-[#F5F5F7] dark:bg-[#2C2C2E]">
            <div>
              <div className="font-semibold text-sm text-[#1D1D1F] dark:text-[#F5F5F7]">
                {user.profile.facultyAdvisor.name}
              </div>
              <div className="text-xs text-[#6E6E73] dark:text-[#98989D] mt-0.5">
                Faculty Advisor • Department of CSE
              </div>
            </div>

            <div className="flex items-center space-x-3 text-xs">
              {user.profile.facultyAdvisor.email && (
                <a
                  href={`mailto:${user.profile.facultyAdvisor.email}`}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10] text-[#007AFF] dark:text-[#0A84FF] hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{user.profile.facultyAdvisor.email}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Sign Out Card */}
      <div className="p-6 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10] flex items-center justify-between">
        <div>
          <div className="font-semibold text-sm text-[#1D1D1F] dark:text-[#F5F5F7]">
            Session Management
          </div>
          <div className="text-xs text-[#6E6E73] dark:text-[#98989D] mt-0.5">
            Explicitly signs out from both SRM portals and clears stored cache
          </div>
        </div>

        <button
          onClick={logout}
          className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-[#FF3B30]/10 hover:bg-[#FF3B30]/20 text-[#FF3B30] dark:text-[#FF453A] border border-[#FF3B30]/20 font-medium text-xs transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};
