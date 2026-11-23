import React, { useState } from 'react';
import { useSession } from '../../context/SessionContext';
import { Award, Search } from 'lucide-react';

export const MarksView: React.FC = () => {
  const { user } = useSession();
  const [searchTerm, setSearchTerm] = useState('');

  if (!user) return null;

  const filtered = user.marks.filter((m) => {
    const q = searchTerm.toLowerCase();
    const courseTitle = m.courseTitle || '';
    const courseCode = m.courseCode || '';
    return courseTitle.toLowerCase().includes(q) || courseCode.toLowerCase().includes(q);
  });

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
            Internal Assessments & Marks
          </h2>
          <p className="text-sm text-[#6E6E73] dark:text-[#98989D] mt-1">
            Continuous evaluation breakdown for Theory, Labs & Project evaluations
          </p>
        </div>

        {/* Global Summary Badge */}
        <div className="flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10] self-start">
          <Award className="w-4 h-4 text-[#007AFF] dark:text-[#0A84FF]" />
          <span className="text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
            {user.marks.length} Graded Courses
          </span>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#86868B]" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Filter marks by course name or code..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10] text-[#1D1D1F] dark:text-[#F5F5F7] placeholder-[#86868B] text-sm focus:outline-none focus:ring-2 focus:ring-[#007AFF] dark:focus:ring-[#0A84FF]"
        />
      </div>

      {/* Course Marks Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((course) => {
          return (
            <div
              key={course.courseCode}
              className="p-5 rounded-2xl bg-white dark:bg-[#1C1C1E] border border-black/[0.08] dark:border-white/[0.10] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-[#F5F5F7] dark:bg-[#2C2C2E] text-[#007AFF] dark:text-[#0A84FF]">
                    {course.courseCode}
                  </span>
                  {course.totalScore !== undefined && course.maxTotalScore && (
                    <span className="text-xs font-semibold tabular-nums text-[#34C759] dark:text-[#30D158]">
                      Total: {course.totalScore} / {course.maxTotalScore}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-semibold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7]">
                  {course.courseTitle}
                </h3>
              </div>

              {/* Tests Breakdown Table */}
              <div className="mt-5 pt-4 border-t border-black/[0.06] dark:border-white/[0.08] space-y-3">
                {course.marks.map((test, idx) => {
                  const pct = test.maxScore > 0 ? Math.round((test.score / test.maxScore) * 1000) / 10 : 0;
                  return (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
                          {test.testName}
                        </span>
                        <div className="flex items-center space-x-2 tabular-nums">
                          <span className="text-[#6E6E73] dark:text-[#98989D]">
                            {test.score} / {test.maxScore}
                          </span>
                          <span className={`font-semibold ${pct >= 75 ? 'text-[#34C759] dark:text-[#30D158]' : 'text-[#FF9500] dark:text-[#FF9F0A]'}`}>
                            ({pct}%)
                          </span>
                        </div>
                      </div>

                      {/* Mini Bar */}
                      <div className="w-full h-1.5 rounded-full bg-[#EBEBED] dark:bg-[#2C2C2E] overflow-hidden">
                        <div
                          className={`h-full rounded-full ${pct >= 75 ? 'bg-[#34C759] dark:bg-[#30D158]' : 'bg-[#FF9500] dark:bg-[#FF9F0A]'}`}
                          style={{ width: `${Math.min(100, pct)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
