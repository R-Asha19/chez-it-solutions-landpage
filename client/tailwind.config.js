/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        navy: {
          950: "#080b1f",
          900: "#0a0e27",
          800: "#0f1642",
          700: "#131b52",
        },
        brand: {
          indigo: "#4f46e5",
          purple: "#7c3aed",
          blue: "#3b82f6",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #4f46e5 0%, #7c3aed 100%)",
        "brand-gradient-text": "linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%)",
      },
    },
  },
  plugins: [],
};
