/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../Public/**/*.{html,js}"],
  theme: {
    extend: {},
    container: {
      center: true,  // Agar container otomatis berada di tengah
      // padding: '2rem',  // Menambahkan padding
      // screens: {
      //   sm: '100%',   // Lebar container pada layar kecil
      //   md: '768px',  // Lebar container pada layar medium
      //   lg: '1024px', // Lebar container pada layar besar
      //   xl: '1280px', // Lebar container pada layar sangat besar
      // },
    },
  },
  plugins: [],
}

