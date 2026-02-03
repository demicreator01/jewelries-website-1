/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lum-bg': '#faf8f5',
        'lum-card': '#ffffff',
        'lum-gold': '#c9a96e',
        'lum-rose': '#c4868a',
        'lum-text': '#2c2c2c',
        'lum-muted': '#7a7a7a',
        'lum-whatsapp': '#25c554',
      },
      fontFamily: {
        sans: ['"Josefin Sans"', 'sans-serif'],
        heading: ['"Josefin Sans"', 'sans-serif'],
        body: ['"Lora"', 'serif'],
        serif: ['"Lora"', 'serif'],
      },
      boxShadow: {
        'lum-card': '0 2px 12px rgba(0,0,0,0.06)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 10s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
