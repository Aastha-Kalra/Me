/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050505',
          900: '#0A0F1F',
          800: '#0f172a',
          700: '#1e293b',
        },
        electric: {
          blue: '#2563EB',
          bright: '#3B82F6',
          cyan: '#38BDF8',
          glow: '#60A5FA',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(37, 99, 235, 0.25)',
        'glow-md': '0 0 30px rgba(37, 99, 235, 0.35)',
        'glow-lg': '0 0 50px rgba(56, 189, 248, 0.4)',
        'glow-cyan': '0 0 25px rgba(56, 189, 248, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
