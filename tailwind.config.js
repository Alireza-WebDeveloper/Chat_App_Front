/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          1000: "var(--primary-1000)",
        },
        secondary: {
          50: "var(--secondary-50)",
          100: "var(--secondary-100)",
          200: "var(--secondary-200)",
          300: "var(--secondary-300)",
          400: "var(--secondary-400)",
          500: "var(--secondary-500)",
          600: "var(--secondary-600)",
          700: "var(--secondary-700)",
          800: "var(--secondary-800)",
          900: "var(--secondary-900)",
        },
        info: {
          50: "var(--info-50)",
          100: "var(--info-100)",
          200: "var(--info-200)",
          300: "var(--info-300)",
          400: "var(--info-400)",
          500: "var(--info-500)",
          600: "var(--info-600)",
          700: "var(--info-700)",
          800: "var(--info-800)",
          900: "var(--info-900)",
        },
        danger: {
          50: "var(--danger-50)",
          100: "var(--danger-100)",
          200: "var(--danger-200)",
          300: "var(--danger-300)",
          400: "var(--danger-400)",
          500: "var(--danger-500)",
          600: "var(--danger-600)",
          700: "var(--danger-700)",
          800: "var(--danger-800)",
          900: "var(--danger-900)",
        },
      },
      fontSize: {
        p1: "var(--font-p1)",
        p2: "var(--font-p2)",
        p3: "var(--font-p3)",
        p4: "var(--font-p4)",
        p5: "var(--font-p5)",
        p6: "var(--font-p6)",
        p7: "var(--font-p7)",
        p8: "var(--font-p8)",
        p9: "var(--font-p9)",
        p10: "var(--font-p10)",
        p11: "var(--font-p11)",
        p12: "var(--font-p12)",
        p13: "var(--font-p13)",
        p14: "var(--font-p14)",
        p15: "var(--font-p15)",
      },
    },
  },
  plugins: [],
};
