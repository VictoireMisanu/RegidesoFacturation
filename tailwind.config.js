/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/**/*.edge', './resources/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        basicBlue: '#014284',
        Bg1: '#000000',
        Bg2: '#202327',
        BgProfil: '#333639',
      },
    },
  },
  plugins: [],
}
