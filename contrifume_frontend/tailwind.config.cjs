const colors = require("tailwindcss/colors.js");
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'play-fair': ['play-fair', 'sans-serif'],
				combo: ['combo', 'sans-serif'],
				lato: ['lato', 'sans-serif'],
				ssp: ['source-sans-pro', 'sans-serif'],
				inter: ['inter', 'sans-serif'],
				poppins: ['poppins', 'sans-serif'],
				ds: ['dancing-script', 'sans-serif'],
				'noto-sans': ['noto-sans', 'sans-serif'],
			}
		},
		colors: {
			...colors,
			'primary': '#202124',
			'secondary': '#3c4043',
		}
	},

	plugins: []
};

module.exports = config;
