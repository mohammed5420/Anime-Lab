module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        600: "600% 600%"
      },
      colors: {
        "cusBlue": {
          100: "#2b3945",
          200: "#202c37",
          300: "#111517",
          400: "#858585",
          500: "#fafafa",
          600: "#ffffff",
        },
      },
      keyframes: {
        loading: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        }
       },
       animation: {
        loading: 'loading 3s ease-in-out infinite',
       },
       flex: {
        '0': '0 0 auto'},
    },
  },
  fontFamily: {
    body: ["Rubik", "sans-serif"],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
