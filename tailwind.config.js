export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 60px rgba(56, 189, 248, 0.16)',
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 35%), radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.18), transparent 22%)',
      },
    },
  },
  plugins: [],
}
