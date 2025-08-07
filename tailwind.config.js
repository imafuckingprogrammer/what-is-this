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
        // New color palette - Modern Blue & Monochrome
        'electric-blue': '#0040FF',
        'black': '#000000',
        'white': '#FFFFFF',
        'light-gray': '#F8F9FA',
        'medium-gray': '#6B7280',
        
        // Clean foundation with new colors
        'bg-primary': '#FFFFFF', // White as primary bg
        'bg-secondary': '#F8F9FA', // Light gray as secondary bg
        'bg-tertiary': '#F1F5F9', // Very light gray
        'bg-quaternary': '#FAFBFC', // Lightest gray as quaternary bg
        'text-primary': '#000000', // Black for primary text
        'text-secondary': '#374151', // Dark gray for secondary text
        'text-tertiary': '#6B7280', // Medium gray for tertiary text
        'text-quaternary': '#9CA3AF', // Light gray
        'text-accent': '#0040FF', // Electric blue as accent text
        'border-light': '#E5E7EB',
        'border-medium': '#D1D5DB',
        'accent-primary': '#0040FF', // Electric blue as primary accent
        'accent-hover': '#0033CC', // Darker blue for hover
        'accent-light': '#EFF6FF', // Very light blue for light accent
        
        // Legacy colors for compatibility
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