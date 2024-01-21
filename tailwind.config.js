module.exports = {
  content: ['./src/**/*.{html,js}'], // Asegúrate de incluir la ruta a tus archivos HTML y JavaScript
  theme: {
    extend: {
      colors: {
        'colegio-primary': '#004d99', // Color primario del colegio
        'colegio-secondary': '#333', // Color secundario del colegio
      },
      fontFamily: {
        'body': ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
