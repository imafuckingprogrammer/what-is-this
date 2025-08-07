/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
        swiss: ['DM Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        // Custom Color Palette
        'dark_purple': {
          DEFAULT: '#331832',
          100: '#0a050a',
          200: '#150a14',
          300: '#1f0f1f',
          400: '#2a1429',
          500: '#331832',
          600: '#6f346d',
          700: '#aa50a7',
          800: '#c889c5',
          900: '#e3c4e2'
        },
        'english_violet': {
          DEFAULT: '#694d75',
          100: '#150f17',
          200: '#2a1f2f',
          300: '#3f2e46',
          400: '#543d5e',
          500: '#694d75',
          600: '#8b669b',
          700: '#a88cb4',
          800: '#c5b2cd',
          900: '#e2d9e6'
        },
        'vista_blue': {
          DEFAULT: '#809bce',
          100: '#131d30',
          200: '#253a5f',
          300: '#38568f',
          400: '#4f74ba',
          500: '#809bce',
          600: '#98aed7',
          700: '#b2c2e1',
          800: '#ccd7eb',
          900: '#e5ebf5'
        },
        'rose_pink': {
          DEFAULT: '#ff74d4',
          100: '#4a0033',
          200: '#950066',
          300: '#df0099',
          400: '#ff2bbc',
          500: '#ff74d4',
          600: '#ff91dc',
          700: '#fface5',
          800: '#ffc8ee',
          900: '#ffe3f6'
        },
        'fairy_tale': {
          DEFAULT: '#eac4d5',
          100: '#3f1729',
          200: '#7e2d52',
          300: '#bc457b',
          400: '#d384a7',
          500: '#eac4d5',
          600: '#eecfdd',
          700: '#f2dbe5',
          800: '#f6e7ee',
          900: '#fbf3f6'
        },

        // Legacy colors for compatibility
        'electric-blue': '#0040FF',
        'black': '#000000',
        'white': '#FFFFFF',
        'light-gray': '#F8F9FA',
        'medium-gray': '#6B7280',
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F8F9FA',
        'bg-tertiary': '#F1F5F9',
        'bg-quaternary': '#FAFBFC',
        'text-primary': '#000000',
        'text-secondary': '#374151',
        'text-tertiary': '#6B7280',
        'text-quaternary': '#9CA3AF',
        'text-accent': '#0040FF',
        'border-light': '#E5E7EB',
        'border-medium': '#D1D5DB',
        'accent-primary': '#0040FF',
        'accent-hover': '#0033CC',
        'accent-light': '#EFF6FF',
        'rich-black': '#000000',
        'folly': '#0040FF',
        'light-sea-green': '#0040FF',
        'seasalt': '#F8F9FA',
        'celestial-blue': '#0040FF',

        // Legacy colors for compatibility
        accent: {
          DEFAULT: '#0040FF',
          light: '#EFF6FF',
          dark: '#0033CC',
        },
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      transitionDuration: {
        '250': '250ms',
      },
    },
  },
  plugins: [],
}