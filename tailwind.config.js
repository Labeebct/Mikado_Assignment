/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'box': '0px 0px 8px rgba(0, 0, 0, 0.2)',
      },
      cursor: {
        large: 'url(/path-to-your-cursor.png), auto',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        merriweather: ['var(--font-merriweather)', 'serif'],
        playfair: ['var(--font-playfair-display)', 'serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      }, textShadow: {
        'sm': '0px 0px 5px rgba(0, 0, 0, 0.5)',
        'md': '1px 1px 10px rgba(0, 0, 0, 0.5)',
        'lg': '2px 2px 15px rgba(0, 0, 0, 0.5)',
        'xl': '4px 4px 20px rgba(0, 0, 0, 0.5)',
      },
      theme: {
        screens: {

          'xs': '500px',

          'sm': '640px',

          'md': '868px',

          'lg': '1004px',

          'xl': '1280px',

          '2xl': '1536px',

        }
      }
    },
  },
  plugins: [],
};
