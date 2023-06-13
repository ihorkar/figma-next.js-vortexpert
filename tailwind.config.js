/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        vpurple: {
          500: "#9C85FB",
          900: "#1E1F33",
          950: "#07081E"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        vlinear: 'linear-gradient(90deg, #886DF5 0%, #9C85FB 100%);'
      },
    },
  },
  plugins: [require("daisyui")],
}
