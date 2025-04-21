/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#4F46E5', // Color principal (ajusta según tu marca)
          secondary: '#10B981', // Color secundario
        },
      },
    },
    plugins: [],
  }