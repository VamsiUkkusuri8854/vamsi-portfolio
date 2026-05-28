module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        deep: '#0b1220',
        cyan: '#00F0FF',
        neon: '#7C3AED'
      },
      backgroundImage: {
        'gradient-neon': 'linear-gradient(90deg,#00F0FF33,#7C3AED33)'
      }
    },
  },
  plugins: [],
}
