/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {},
  },
  plugins: [],
}

import('tailwindcss').Config

module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {

      
			animation: {
				fade: 'fadeIn 1s ease-in-out',
			},

			keyframes: {
				fadeIn: {
					from: { opacity: 0},
					to: { opacity: 1 },
				},
			},
		},
	},
	plugins: [],
};