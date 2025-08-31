/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0F172A',
          surface: '#1E293B',
        },
        textcolor: {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
        },
        primary: {
          light: '#60A5FA',
          DEFAULT: '#3B82F6',
          dark: '#1D4ED8',
        },
        accent: {
          success: '#22C55E',
          error: '#EF4444',
          warning: '#EAB308',
          purple: '#A855F7',
        },
      },
    },
  },
  plugins: [],
}

