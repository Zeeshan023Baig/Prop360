/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          50: '#F8FAFC',
          200: '#E2E8F0',
          500: '#64748B',
          800: '#1E293B',
        },
        primary: {
          blue: '#2563EB',
          dark: '#1E3A8A',
        },
        success: {
          green: '#16A34A',
        },
        accent: {
          purple: '#7C3AED',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
