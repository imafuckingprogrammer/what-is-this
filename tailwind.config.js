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
        // New color palette
        'teal': '#25CED1',
        'white': '#FFFFFF',
        'cream': '#FCEADE',
        'orange': '#FF8A5B',
        'pink': '#EA526F',
        
        // Clean foundation with new colors
        'bg-primary': '#FFFFFF', // White as primary bg
        'bg-secondary': '#FCEADE', // Cream as secondary bg
        'bg-tertiary': '#f8f9fa', // Very light gray
        'bg-quaternary': '#25CED1', // Teal as accent bg
        'text-primary': '#2c3137', // Dark gray for primary text
        'text-secondary': '#57636f', // Medium gray for secondary text
        'text-tertiary': '#8894a1', // Light gray for tertiary text
        'text-quaternary': '#a8b5c0', // Lighter gray
        'text-accent': '#EA526F', // Pink as accent text
        'border-light': '#e5e7eb',
        'border-medium': '#d1d5db',
        'accent-primary': '#25CED1', // Teal as primary accent
        'accent-hover': '#FF8A5B', // Orange for hover
        'accent-light': '#FCEADE', // Cream for light accent
        
        // Legacy colors for compatibility
        'rich-black': '#2c3137',
        'folly': '#EA526F',
        'light-sea-green': '#25CED1',
        'seasalt': '#FCEADE',
        'celestial-blue': '#25CED1',
        
        // Legacy colors for compatibility
        accent: {
          DEFAULT: '#25CED1',
          light: '#FCEADE',
          dark: '#1a9b9e',
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