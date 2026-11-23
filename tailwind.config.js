/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          light: '#FAFAFA',
          dark: '#09090B',
        },
        bento: {
          card: '#131316',
          'card-light': '#FFFFFF',
          sub: '#1C1C21',
          'sub-light': '#F4F4F6',
        },
        ember: {
          emerald: '#10B981',
          teal: '#14B8A6',
          amber: '#F59E0B',
          rose: '#F43F5E',
          indigo: '#6366F1'
        },
        accent: 'var(--color-accent)'
      },
      borderRadius: {
        'bento': '24px',
        'pill': '9999px',
        'chip': '12px'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Space Grotesk"', 'sans-serif'],
        mono: ['"Plus Jakarta Sans"', '"Inter"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
