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
        'amber': '#FFA400',
        'blue': '#009FFD',
        'navy': '#2A2A72',
        'charcoal': '#232528',
        'ice': '#EAF6FF',
        
        // Clean foundation with modern accents
        'bg-primary': '#EAF6FF', // Using ice as primary bg
        'bg-secondary': '#ffffff', 
        'bg-tertiary': '#fafafb',
        'bg-quaternary': '#fcfcfc',
        'text-primary': '#232528', // Using charcoal as primary text
        'text-secondary': '#2A2A72', // Using navy as secondary text
        'text-tertiary': '#57636f',
        'text-quaternary': '#8894a1',
        'border-light': '#e5e5e5',
        'border-medium': '#d4d4d4',
        'accent-primary': '#009FFD', // Using blue as primary accent
        'accent-hover': '#FFA400', // Using amber for hover
        'accent-light': '#EAF6FF', // Using ice for light accent
        
        // Legacy colors for compatibility
        'rich-black': '#232528',
        'folly': '#ff3366',
        'light-sea-green': '#2ec4b6',
        'seasalt': '#EAF6FF',
        'celestial-blue': '#009FFD',
        
        // Legacy colors for compatibility
        accent: {
          DEFAULT: '#2563eb',
          light: '#60a5fa',
          dark: '#1d4ed8',
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