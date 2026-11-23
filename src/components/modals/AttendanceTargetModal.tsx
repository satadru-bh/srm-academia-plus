import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, RotateCcw } from 'lucide-react';
import { useSession } from '../../context/SessionContext';

interface AttendanceTargetModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTarget: number;
  onSave: (target: number) => void;
}

const PRESETS = [
  { value: 75, label: '75%', desc: 'srm min' },
  { value: 80, label: '80%', desc: 'safe buffer' },
  { value: 85, label: '85%', desc: 'placement' },
  { value: 90, label: '90%', desc: 'honors' },
];

export const AttendanceTargetModal: React.FC<AttendanceTargetModalProps> = ({
  isOpen,
  onClose,
  currentTarget,
  onSave,
}) => {
  const { isDarkMode } = useSession();
  const [target, setTarget] = useState<number>(currentTarget);

  useEffect(() => {
    if (isOpen) {
      setTarget(currentTarget);
    }
  }, [isOpen, currentTarget]);

  if (!isOpen) return null;

  const handleApply = () => {
    onSave(target);
    onClose();
  };

  const getTargetDescription = (val: number): string => {
    if (val === 75) return "srm's official mandatory cutoff. condonation fines or debarment apply below 75%.";
    if (val < 75) return "warning: below srm university regulations. high risk of semester exam debarment.";
    if (val < 80) return "close to the 75% cutoff with minimal margin for emergencies or illness.";
    if (val < 85) return "recommended safety buffer. protects against surprise absences or event leaves.";
    if (val < 90) return "qualifies for strict campus placement shortlists and tier-1 company cutoffs.";
    return "highest distinction threshold. qualifies for department honors and merit awards.";
  };

  const getBadge = (val: number) => {
    if (val === 75) return { label: 'srm minimum', style: 'bg-black/5 dark:bg-white/10 text-[#111111] dark:text-[#FAFAFA]' };
    if (val < 75) return { label: 'below cutoff', style: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20' };
    if (val < 82) return { label: 'safe buffer', style: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20' };
    if (val < 88) return { label: 'placement tier', style: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20' };
    return { label: 'honors & merit', style: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20' };
  };

  const badge = getBadge(target);

  // Dynamic slider track fill gradient from min (60%) to max (95%)
  const minVal = 60;
  const maxVal = 95;
  const progressRatio = Math.max(0, Math.min(100, ((target - minVal) / (maxVal - minVal)) * 100));

  const sliderFillColor = isDarkMode ? '#FAFAFA' : '#111111';
  const sliderTrackColor = isDarkMode ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.08)';
  const sliderGradient = `linear-gradient(to right, ${sliderFillColor} 0%, ${sliderFillColor} ${progressRatio}%, ${sliderTrackColor} ${progressRatio}%, ${sliderTrackColor} 100%)`;

  return typeof document !== 'undefined'
    ? createPortal(
        <AnimatePresence>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 bg-black/40 dark:bg-black/70 backdrop-blur-sm"
              onClick={onClose}
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm sm:max-w-md bento-card p-6 shadow-2xl border border-black/10 dark:border-white/10 z-10 space-y-5"
            >
              {/* Header: Pure typography, zero clutter icons */}
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-bold text-[#111111] dark:text-[#FAFAFA] lowercase tracking-tight">
                    attendance target
                  </h2>
                  <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-0.5">
                    recalibrates safe bunks and required classes
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-xl text-[#71717A] hover:text-[#111111] dark:text-[#A1A1AA] dark:hover:text-[#FAFAFA] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  aria-label="close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Bento Hero Card: Target Value + Context Badge */}
              <div className="p-4 rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-[#71717A] dark:text-[#A1A1AA] lowercase">
                    chosen cutoff
                  </span>
                  <div className="text-4xl sm:text-5xl font-black tabular-nums tracking-tight text-[#111111] dark:text-[#FAFAFA] mt-0.5">
                    {target}%
                  </div>
                </div>

                <div className="flex flex-col items-end gap-1.5">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full lowercase tracking-tight ${badge.style}`}>
                    {badge.label}
                  </span>
                  <span className="text-[10px] text-[#71717A] dark:text-[#A1A1AA] lowercase font-medium">
                    {target === 75
                      ? 'standard cutoff'
                      : target > 75
                      ? `+${target - 75}% over min`
                      : `${target - 75}% below min`}
                  </span>
                </div>
              </div>

              {/* Quick Preset Segmented Pills */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-[#71717A] dark:text-[#A1A1AA] lowercase px-0.5">
                  quick presets
                </span>
                <div className="grid grid-cols-4 gap-1.5 p-1 rounded-2xl bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.06] dark:border-white/[0.06]">
                  {PRESETS.map((p) => {
                    const isSelected = target === p.value;
                    return (
                      <button
                        key={p.value}
                        onClick={() => setTarget(p.value)}
                        className={`py-2 px-1.5 rounded-xl text-xs font-semibold lowercase transition-all flex flex-col items-center gap-0.5 ${
                          isSelected
                            ? 'bg-black text-white dark:bg-white dark:text-black shadow-sm font-bold'
                            : 'text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA]'
                        }`}
                      >
                        <span className="tabular-nums font-bold text-xs">{p.value}%</span>
                        <span className="text-[9px] opacity-75 font-normal">{p.desc}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Apple-Grade Slider Bar with Dynamic Progress Fill */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-[11px] font-semibold text-[#71717A] dark:text-[#A1A1AA] lowercase px-0.5">
                  <span>fine tune</span>
                  <span className="tabular-nums font-medium text-[10px]">range: 60% – 95%</span>
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setTarget((prev) => Math.max(minVal, prev - 1))}
                    disabled={target <= minVal}
                    className="w-9 h-9 rounded-full bg-black/[0.05] dark:bg-white/[0.06] hover:bg-black/[0.1] dark:hover:bg-white/[0.12] active:scale-95 text-[#111111] dark:text-[#FAFAFA] transition-all flex items-center justify-center shrink-0 disabled:opacity-30 disabled:pointer-events-none"
                    title="decrease by 1%"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex-1 relative flex items-center">
                    <input
                      type="range"
                      min={minVal}
                      max={maxVal}
                      step="1"
                      value={target}
                      onChange={(e) => setTarget(Number(e.target.value))}
                      style={{ background: sliderGradient }}
                      className="apple-slider"
                    />
                  </div>

                  <button
                    onClick={() => setTarget((prev) => Math.min(maxVal, prev + 1))}
                    disabled={target >= maxVal}
                    className="w-9 h-9 rounded-full bg-black/[0.05] dark:bg-white/[0.06] hover:bg-black/[0.1] dark:hover:bg-white/[0.12] active:scale-95 text-[#111111] dark:text-[#FAFAFA] transition-all flex items-center justify-center shrink-0 disabled:opacity-30 disabled:pointer-events-none"
                    title="increase by 1%"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex justify-between text-[10px] text-[#71717A] dark:text-[#A1A1AA] tabular-nums px-1 pt-0.5">
                  <span>60%</span>
                  <span className="font-semibold text-[#111111] dark:text-[#FAFAFA]">75% (srm min)</span>
                  <span>95%</span>
                </div>
              </div>

              {/* Explainer Note */}
              <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase px-0.5 leading-relaxed min-h-[32px] flex items-center">
                {getTargetDescription(target)}
              </p>

              {/* Bottom Actions */}
              <div className="pt-2 flex items-center justify-between border-t border-black/[0.06] dark:border-white/[0.06]">
                {target !== 75 ? (
                  <button
                    onClick={() => setTarget(75)}
                    className="flex items-center space-x-1.5 text-xs font-medium text-[#71717A] hover:text-[#111111] dark:text-[#A1A1AA] dark:hover:text-[#FAFAFA] lowercase transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>reset to 75%</span>
                  </button>
                ) : (
                  <span className="text-xs text-[#71717A] dark:text-[#52525B] lowercase font-medium">
                    default threshold
                  </span>
                )}

                <button
                  onClick={handleApply}
                  className="px-5 py-2 rounded-2xl bg-black text-white dark:bg-white dark:text-black text-xs font-bold lowercase shadow-sm hover:opacity-90 active:scale-95 transition-all"
                >
                  apply target
                </button>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>,
        document.body
      )
    : null;
};
