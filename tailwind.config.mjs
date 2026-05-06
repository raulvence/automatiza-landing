/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: 'oklch(15% 0.012 90)',
        surface: 'oklch(20% 0.014 90)',
        elevated: 'oklch(24% 0.014 90)',
        ink: 'oklch(96% 0.005 90)',
        muted: 'oklch(62% 0.014 90)',
        dim: 'oklch(45% 0.014 90)',
        line: 'oklch(28% 0.014 90)',
        accent: {
          DEFAULT: 'oklch(85% 0.22 130)',
          dim: 'oklch(70% 0.18 130)',
          glow: 'oklch(85% 0.22 130 / 0.25)',
        },
        warn: 'oklch(78% 0.16 50)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.025em',
      },
      fontSize: {
        '10xl': ['11rem', { lineHeight: '0.92' }],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.4s ease-in-out infinite',
        'data-flow': 'dataFlow 2.8s linear infinite',
        'cursor-blink': 'blink 1.05s step-end infinite',
        'marquee': 'marquee 40s linear infinite',
        'count-up': 'countUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.7', filter: 'brightness(1.3)' },
        },
        dataFlow: {
          '0%': { strokeDashoffset: '120' },
          '100%': { strokeDashoffset: '0' },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
