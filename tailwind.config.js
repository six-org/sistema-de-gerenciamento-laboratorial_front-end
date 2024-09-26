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
      'primary-pure': '#10B978',

      /* Cores Neutrais */
      'neutral-light': '#637083', 
      'neutral-dark': '#09090B',
      'neutral-pure': '#344051',

      /* Cores Erro */
      'erro-pure': '#DC2626',

      /** Cores White e Black */
      'white': '#ffffff',
      'black': '#000000',
    },
    extend: {},
  },
  plugins: [],
}