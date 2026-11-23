import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Target, Minus, Plus, RotateCcw } from 'lucide-react';

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
    if (val === 75) return "srm mandatory threshold (below 75% incurs condonation / debarment)";
    if (val < 75) return "below university regulations (high risk of exam debarment)";
    if (val < 80) return "close to cutoff with minimal buffer for emergencies";
    if (val < 85) return "safe buffer zone recommended for stress-free semesters";
    if (val < 90) return "meets strict placement eligibility criteria for tier-1 companies";
    return "dean's honors list and institutional scholarship threshold";
  };

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
              className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm"
              onClick={onClose}
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm bento-card p-6 shadow-2xl border border-black/10 dark:border-white/10 z-10 space-y-6"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/[0.06] dark:border-white/[0.06]">
                    <Target className="w-4 h-4 text-[#111111] dark:text-[#FAFAFA]" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#111111] dark:text-[#FAFAFA] lowercase tracking-tight">
                      attendance target
                    </h2>
                    <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase mt-0.5">
                      calibrate bunk margins & class requirements
                    </p>
                  </div>
                </div>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-xl text-[#71717A] hover:text-[#111111] dark:text-[#A1A1AA] dark:hover:text-[#FAFAFA] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Big Hero Target Value Display */}
              <div className="text-center py-2 space-y-1">
                <div className="text-5xl font-black tabular-nums tracking-tight text-[#111111] dark:text-[#FAFAFA]">
                  {target}%
                </div>
                <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] lowercase px-2 leading-relaxed min-h-[32px] flex items-center justify-center">
                  {getTargetDescription(target)}
                </p>
              </div>

              {/* Quick Presets Segmented Pills */}
              <div className="grid grid-cols-4 gap-1.5 p-1 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/[0.06] dark:border-white/[0.06]">
                {PRESETS.map((p) => {
                  const isSelected = target === p.value;
                  return (
                    <button
                      key={p.value}
                      onClick={() => setTarget(p.value)}
                      className={`py-1.5 px-2 rounded-xl text-xs font-semibold lowercase transition-all flex flex-col items-center ${
                        isSelected
                          ? 'bg-white dark:bg-[#1E1E22] text-[#111111] dark:text-[#FAFAFA] shadow-sm font-bold'
                          : 'text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA]'
                      }`}
                    >
                      <span className="tabular-nums">{p.label}</span>
                      <span className="text-[9px] opacity-70 font-normal">{p.desc}</span>
                    </button>
                  );
                })}
              </div>

              {/* Precision Slider & Step Buttons */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setTarget((prev) => Math.max(60, prev - 1))}
                    disabled={target <= 60}
                    className="p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[#111111] dark:text-[#FAFAFA] transition-colors disabled:opacity-30"
                    title="decrease by 1%"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>

                  <input
                    type="range"
                    min="60"
                    max="95"
                    step="1"
                    value={target}
                    onChange={(e) => setTarget(Number(e.target.value))}
                    className="w-full accent-[#111111] dark:accent-[#FAFAFA] cursor-pointer"
                  />

                  <button
                    onClick={() => setTarget((prev) => Math.min(95, prev + 1))}
                    disabled={target >= 95}
                    className="p-2 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-[#111111] dark:text-[#FAFAFA] transition-colors disabled:opacity-30"
                    title="increase by 1%"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="flex justify-between text-[10px] text-[#71717A] dark:text-[#A1A1AA] tabular-nums px-1">
                  <span>60%</span>
                  <span>75% (srm min)</span>
                  <span>95%</span>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-2 flex items-center justify-between border-t border-black/[0.06] dark:border-white/[0.06]">
                {target !== 75 ? (
                  <button
                    onClick={() => setTarget(75)}
                    className="flex items-center space-x-1 text-xs text-[#71717A] hover:text-[#111111] dark:text-[#A1A1AA] dark:hover:text-[#FAFAFA] lowercase transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>reset to 75%</span>
                  </button>
                ) : (
                  <span className="text-xs text-[#71717A] dark:text-[#52525B] lowercase">
                    default threshold
                  </span>
                )}

                <button
                  onClick={handleApply}
                  className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black text-xs font-bold lowercase shadow-sm hover:opacity-90 transition-opacity"
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
