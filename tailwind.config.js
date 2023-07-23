module.exports = {
  content: [
    './views/**/*.ejs',
    './assets/js/**/*.{js,vue,jsx,ts,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    require('@tailwindcss/forms'),
  ],
}
