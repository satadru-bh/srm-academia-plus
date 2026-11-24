import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Navigation Motion & Tactile Interactions', () => {
  const floatingDockPath = path.resolve(__dirname, '../FloatingDock.tsx');
  const appLayoutPath = path.resolve(__dirname, '../AppLayout.tsx');
  const bentoCardPath = path.resolve(__dirname, '../../common/motion/InteractiveBentoCard.tsx');
  const animatedNumberPath = path.resolve(__dirname, '../../common/motion/AnimatedNumber.tsx');

  const floatingDockContent = fs.readFileSync(floatingDockPath, 'utf-8');
  const appLayoutContent = fs.readFileSync(appLayoutPath, 'utf-8');
  const bentoCardContent = fs.readFileSync(bentoCardPath, 'utf-8');
  const animatedNumberContent = fs.readFileSync(animatedNumberPath, 'utf-8');

  describe('FloatingDock Motion', () => {
    it('configures active pill spring with stiffness 450, damping 32, mass 0.8', () => {
      expect(floatingDockContent).toContain('layoutId="active-dock-pill"');
      expect(floatingDockContent).toContain('stiffness: 450, damping: 32, mass: 0.8');
    });

    it('adds hover and tap micro-bounce to dock tab icons', () => {
      expect(floatingDockContent).toContain('whileHover={{ y: -2, scale: 1.05 }}');
      expect(floatingDockContent).toContain('whileTap={{ scale: 0.94 }}');
    });

    it('features bouncy click and hover scale on sync and theme quick controls', () => {
      expect(floatingDockContent).toContain('whileHover={isSyncing ? undefined : { scale: 1.15 }}');
      expect(floatingDockContent).toContain('whileTap={{ scale: 0.88 }}');
    });

    it('configures popover more menu with staggered slide-in animations', () => {
      expect(floatingDockContent).toContain('staggerChildren: 0.04');
      expect(floatingDockContent).toContain('variants={popoverVariants}');
      expect(floatingDockContent).toContain('variants={itemVariants}');
    });
  });

  describe('AppLayout Motion', () => {
    it('uses SpringPress with scaleHover 1.02 and scaleTap 0.97 for search trigger', () => {
      expect(appLayoutContent).toContain('<SpringPress');
      expect(appLayoutContent).toContain('scaleHover={1.02}');
      expect(appLayoutContent).toContain('scaleTap={0.97}');
      expect(appLayoutContent).toContain('setIsCommandPaletteOpen(true)');
    });

    it('renders clean brand title and window scroll resistance without redundant status pill', () => {
      expect(appLayoutContent).toContain('academia plus');
      expect(appLayoutContent).toContain('WindowScrollResistance');
      expect(appLayoutContent).not.toContain("<span>{isHoliday ? 'holiday' : `day order ${currentDayOrder}`}</span>");
    });

    it('expands search bar on mobile while keeping keyboard keys hidden on mobile', () => {
      expect(appLayoutContent).toContain('w-full max-w-[210px] sm:max-w-[240px]');
      expect(appLayoutContent).toContain('hidden sm:inline-flex items-center space-x-1 pl-1');
    });
  });

  describe('FloatingDock Viewport Boundaries', () => {
    it('popover variants include x: -50% to prevent right-hand mobile overflow', () => {
      expect(floatingDockContent).toContain("x: '-50%'");
      expect(floatingDockContent).toContain('max-w-[calc(100vw-32px)]');
    });

    it('anchors popover directly above more button on PC and horizontally centered on mobile', () => {
      // Desktop: inside relative container directly above the more button
      expect(floatingDockContent).toContain('absolute bottom-full mb-3.5 left-1/2 w-80');
      // Mobile: centered in viewport with safe margins
      expect(floatingDockContent).toContain('fixed bottom-20 left-1/2 -translate-x-1/2 w-[calc(100vw-32px)]');
      expect(floatingDockContent).toContain('isMobile');
    });
  });

  describe('Scroll Spring Mobile Exclusivity', () => {
    it('restricts scroll spring resistance strictly to mobile touch and disables on PC', () => {
      const scrollPath = path.resolve(__dirname, '../../common/motion/ScrollResistance.tsx');
      const scrollContent = fs.readFileSync(scrollPath, 'utf-8');
      expect(scrollContent).toContain('MOBILE_SPRING_CONFIG');
      expect(scrollContent).toContain('stiffness: 420');
      expect(scrollContent).toContain('damping: 30');
      expect(scrollContent).toContain('mass: 0.4');
      expect(scrollContent).toContain('isMobile');
      expect(scrollContent).not.toContain("addEventListener('wheel'");
    });
  });

  describe('Task 1 Review Improvements', () => {
    it('InteractiveBentoCard applies transformPerspective: 1000 for true 3D foreshortening', () => {
      expect(bentoCardContent).toContain('transformPerspective: 1000');
    });

    it('AnimatedNumber renders display motion value directly without target flash', () => {
      expect(animatedNumberContent).toContain('{display}');
      expect(animatedNumberContent).not.toContain('spanRef.current.textContent');
    });
  });
});
