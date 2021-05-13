const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: [],
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xs: { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
			sm: { min: '576px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
			md: { min: '898px' }, // Tablet (matches max: iPad Pro @ 1112px).
			lg: { min: '1200px' }, // Desktop smallest.
			xl: { min: '1159px' }, // Desktop wide.
			xxl: { min: '1359px' }, // Desktop widescreen.
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
				'home-land': "url('/bg_landing.png')",
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
