/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {},
		colors: {
			mainColor: '#29A0F5',
			darkColor: '#1B2534',
			lightColor: '#f6f6f6',
			textColor: '#606060',
		},
		fontFamily: {
			mainFont: ['"Open Sans"'],
		},
	},
	plugins: [],
};
