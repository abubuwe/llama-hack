/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(var(--tw-rotate))' },
          '50%': { transform: 'translateY(-20px) rotate(var(--tw-rotate))' },
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 8s ease-in-out 3s infinite',
      }
    }
  },
  plugins: [],
};
