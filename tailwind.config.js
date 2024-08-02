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
        large: 'url(https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_863/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/v6bwf3e8qhdfhrgq7lv3/IMGWorldsofAdventureTicketinDubai.jpg), auto',
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
