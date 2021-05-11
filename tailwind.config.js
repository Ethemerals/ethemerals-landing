const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [],
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xs: '400px',
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			colors: {
				customblue: {
					light: '#372D3C',
					DEFAULT: '#2F2D3C',
					dark: '#0E151C',
				},
			},
			fontFamily: {
				sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: (theme) => ({
				'home-land': "url('https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Flanding%2Flandsales.jpg?alt=media&token=709767e5-eafe-4fc1-bf28-b77120246fe1')",
				roadmap: "url('/bg_roadmap.png')",
			}),
		},
	},
	variants: {
		extend: {
			backgroundColor: ['checked'],
			borderColor: ['checked'],
			inset: ['checked'],
			zIndex: ['hover', 'active'],
		},
	},
	plugins: [],
	future: {
		purgeLayersByDefault: true,
	},
};
