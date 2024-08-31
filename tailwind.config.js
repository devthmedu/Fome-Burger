/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'], // Inclui todos os arquivos .html e .js no diretório atual e subdiretórios
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/assets/banner10.jpg')", // Corrigido para fechar a string da URL da imagem
      },
    },
  },
  plugins: [],
};
