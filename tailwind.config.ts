import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#DE1B26',
          'red-dark': '#B3121C',
          'red-light': '#FEE2E2',
          navy: '#0B1E36',
          'navy-dark': '#061324',
          'navy-light': '#1A365D',
          charcoal: '#0F172A',
          slate: '#334155',
          light: '#F8FAFC',
          muted: '#64748B',
          border: '#E2E8F0',
          accent: '#D97706',
          green: '#16A34A',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.04), 0 1px 3px rgba(0, 0, 0, 0.06)',
        'card': '0 10px 25px -5px rgba(11, 30, 54, 0.06), 0 8px 10px -6px rgba(11, 30, 54, 0.04)',
        'card-hover': '0 20px 35px -10px rgba(11, 30, 54, 0.12), 0 10px 15px -5px rgba(11, 30, 54, 0.06)',
        'glow-red': '0 0 25px rgba(222, 27, 38, 0.25)',
      }
    },
  },
  plugins: [],
};
export default config;
