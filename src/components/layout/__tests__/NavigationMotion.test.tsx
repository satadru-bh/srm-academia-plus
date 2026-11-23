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

    it('renders living pulse indicator dot for campus status badge', () => {
      expect(appLayoutContent).toContain('relative flex h-2 w-2');
      expect(appLayoutContent).toContain('scale: [1, 1.8, 1]');
      expect(appLayoutContent).toContain('repeat: Infinity');
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
