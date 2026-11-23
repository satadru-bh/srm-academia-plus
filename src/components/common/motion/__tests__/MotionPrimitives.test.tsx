import { describe, it, expect } from 'vitest';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { AnimatedNumber } from '../AnimatedNumber';
import { AnimatedProgressBar } from '../AnimatedProgressBar';
import { InteractiveBentoCard } from '../InteractiveBentoCard';
import { SpringPress } from '../SpringPress';
import { StaggerContainer, StaggerItem } from '../StaggerContainer';
import { PerimeterWarningBorder } from '../PerimeterWarningBorder';

describe('MotionPrimitives Suite', () => {
  describe('AnimatedNumber', () => {
    it('renders initial value with tabular-nums class', () => {
      const html = renderToString(
        React.createElement(AnimatedNumber, { value: 92.4, decimals: 1 })
      );
      expect(html).toContain('tabular-nums');
      expect(html).toContain('92.4');
    });

    it('renders prefix and suffix accurately', () => {
      const html = renderToString(
        React.createElement(AnimatedNumber, {
          value: 85,
          decimals: 0,
          prefix: '$',
          suffix: '%'
        })
      );
      expect(html).toContain('$');
      expect(html).toContain('85');
      expect(html).toContain('%');
    });

    it('renders with custom className', () => {
      const html = renderToString(
        React.createElement(AnimatedNumber, {
          value: 10,
          className: 'text-2xl font-bold'
        })
      );
      expect(html).toContain('text-2xl');
      expect(html).toContain('font-bold');
      expect(html).toContain('tabular-nums');
    });
  });

  describe('AnimatedProgressBar', () => {
    it('renders with correct width percentage for standard values', () => {
      const html = renderToString(
        React.createElement(AnimatedProgressBar, { value: 75, max: 100 })
      );
      expect(html).toContain('role="progressbar"');
      expect(html).toContain('aria-valuenow="75"');
      expect(html).toContain('style="width:75%"');
    });

    it('clamps width percentage between 0 and 100', () => {
      const htmlOver = renderToString(
        React.createElement(AnimatedProgressBar, { value: 150, max: 100 })
      );
      expect(htmlOver).toContain('style="width:100%"');

      const htmlUnder = renderToString(
        React.createElement(AnimatedProgressBar, { value: -20, max: 100 })
      );
      expect(htmlUnder).toContain('style="width:0%"');
    });

    it('applies custom colorClass and className', () => {
      const html = renderToString(
        React.createElement(AnimatedProgressBar, {
          value: 50,
          colorClass: 'bg-emerald-500',
          className: 'h-4 rounded-xl'
        })
      );
      expect(html).toContain('bg-emerald-500');
      expect(html).toContain('h-4 rounded-xl');
    });
  });

  describe('InteractiveBentoCard', () => {
    it('renders children and provides spotlight class', () => {
      const html = renderToString(
        React.createElement(
          InteractiveBentoCard,
          { className: 'custom-card-class', id: 'attendance-card' },
          React.createElement('span', null, 'Card Content')
        )
      );
      expect(html).toContain('Card Content');
      expect(html).toContain('bento-card');
      expect(html).toContain('card-spotlight');
      expect(html).toContain('custom-card-class');
      expect(html).toContain('id="attendance-card"');
    });

    it('renders without tilt when enableTilt is false', () => {
      const html = renderToString(
        React.createElement(
          InteractiveBentoCard,
          { enableTilt: false },
          React.createElement('div', null, 'No Tilt Card')
        )
      );
      expect(html).toContain('No Tilt Card');
      expect(html).toContain('card-spotlight');
    });
  });

  describe('SpringPress', () => {
    it('renders child element inside motion button wrapper', () => {
      const html = renderToString(
        React.createElement(
          SpringPress,
          { className: 'btn-press' },
          React.createElement('span', null, 'Click Me')
        )
      );
      expect(html).toContain('<button');
      expect(html).toContain('Click Me');
      expect(html).toContain('btn-press');
    });
  });

  describe('StaggerContainer and StaggerItem', () => {
    it('renders container and staggered items with content', () => {
      const html = renderToString(
        React.createElement(
          StaggerContainer,
          { className: 'stagger-grid', delay: 0.1 },
          React.createElement(
            StaggerItem,
            { className: 'item-1' },
            React.createElement('span', null, 'First')
          ),
          React.createElement(
            StaggerItem,
            { className: 'item-2' },
            React.createElement('span', null, 'Second')
          )
        )
      );
      expect(html).toContain('stagger-grid');
      expect(html).toContain('item-1');
      expect(html).toContain('item-2');
      expect(html).toContain('First');
      expect(html).toContain('Second');
    });
  });

  describe('Reduced Motion Compliance', () => {
    it('InteractiveBentoCard renders stably and disables tilt when enableTilt is false or motion reduced', () => {
      const html = renderToString(
        React.createElement(
          InteractiveBentoCard,
          { enableTilt: false, className: 'accessible-card' },
          React.createElement('span', null, 'Accessible Content')
        )
      );
      expect(html).toContain('accessible-card');
      expect(html).toContain('bento-card');
      expect(html).toContain('Accessible Content');
    });

    it('AnimatedProgressBar renders final width percentage accurately without runtime errors', () => {
      const html = renderToString(
        React.createElement(AnimatedProgressBar, { value: 88, max: 100 })
      );
      expect(html).toContain('style="width:88%"');
      expect(html).toContain('aria-valuenow="88"');
    });

    it('SpringPress renders clean button without animation glitches', () => {
      const html = renderToString(
        React.createElement(SpringPress, { disabled: true }, 'Disabled Press')
      );
      expect(html).toContain('Disabled Press');
      expect(html).toContain('disabled=""');
    });

    it('PerimeterWarningBorder renders vector rounded rect with hypnotic dash animation and custom radius', () => {
      const html = renderToString(
        React.createElement(PerimeterWarningBorder, { borderRadius: 24, className: 'text-rose-500' })
      );
      expect(html).toContain('animate-perimeter-spin');
      expect(html).toContain('stroke-dasharray="6 6"');
      expect(html).toContain('rx="24"');
      expect(html).toContain('text-rose-500');
    });
  });
});
