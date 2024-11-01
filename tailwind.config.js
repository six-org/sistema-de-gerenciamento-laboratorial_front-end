/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ['Inter', 'system-ui'],
    },
    colors: {
      
      /* Cores Primárias */
      'primary-pure': '#4870FF',

      /* Cores Neutrais */
      'neutral-light': '#637083', 
      'neutral-dark': '#09090B',
      'neutral-pure': '#344051',

      /** Cores com outra nomeclatura */
      'grey-700': '#48505E',
      'grey-400': '#858D9D',

      /* Cores Erro */
      'error': '#DC2626',
      'success': '#059669',

      /** Cores White e Black */
      'white': '#ffffff',
      'black': '#000000',

    },
    extend: {},
  },
  plugins: [],
}