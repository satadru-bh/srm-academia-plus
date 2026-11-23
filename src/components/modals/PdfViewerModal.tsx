import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, FileText, Loader2 } from 'lucide-react';
import { extractGoogleDrivePreviewUrl } from '../../api/notes';

interface PdfViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subjectName?: string;
  resourceKind?: 'note' | 'paper' | 'syllabus';
  url: string;
}

export const PdfViewerModal: React.FC<PdfViewerModalProps> = ({
  isOpen,
  onClose,
  title,
  subjectName,
  resourceKind = 'note',
  url
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const previewUrl = extractGoogleDrivePreviewUrl(url);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Reset loading state when url changes
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
    }
  }, [url, isOpen]);

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md z-[99999]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl h-[88vh] sm:h-[90vh] bento-card border border-black/10 dark:border-white/10 shadow-2xl rounded-3xl z-[100000] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-3.5 border-b border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between gap-3 shrink-0">
              <div className="min-w-0">
                <div className="flex items-center space-x-2">
                  <span className="p-1 rounded-lg bg-black/5 dark:bg-white/5 text-[#71717A] dark:text-[#A1A1AA]">
                    <FileText className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-[#71717A] dark:text-[#A1A1AA]">
                    {resourceKind === 'paper' ? 'Past Question Paper' : resourceKind === 'syllabus' ? 'Official Syllabus' : 'Lecture Resource'}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#111111] dark:text-[#FAFAFA] lowercase truncate mt-0.5">
                  {title} {subjectName && <span className="text-[#71717A] dark:text-[#A1A1AA] font-normal">• {subjectName}</span>}
                </h3>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-1.5 shrink-0">
                <a
                  href={previewUrl.replace('/preview', '/view')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-xs text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors"
                  title="Open full file in Google Drive"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline lowercase">open in drive</span>
                </a>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 text-[#71717A] dark:text-[#A1A1AA] hover:text-[#111111] dark:hover:text-[#FAFAFA] transition-colors cursor-pointer"
                  aria-label="Close document viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Embedded Document Viewer Container */}
            <div className="relative flex-1 w-full h-full bg-neutral-900 overflow-hidden">
              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 bg-[var(--color-bento-card)] text-[#71717A] dark:text-[#A1A1AA]">
                  <Loader2 className="w-7 h-7 animate-spin text-blue-500" />
                  <span className="text-xs lowercase">loading resource preview...</span>
                </div>
              )}

              {previewUrl ? (
                <iframe
                  src={previewUrl}
                  title={title}
                  className="w-full h-full border-0"
                  allow="autoplay"
                  onLoad={() => setIsLoading(false)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center h-full p-8 text-center text-xs text-[#71717A] dark:text-[#A1A1AA]">
                  <p>preview unavailable for this resource.</p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 px-4 py-2 rounded-xl bg-blue-500 text-white font-semibold lowercase"
                  >
                    open external link
                  </a>
                </div>
              )}
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
