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
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				mobileMenuOn: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
				navbarOn: {
					'0%': { backgroundColor: 'rgba(14, 21, 28, 0)' },
					'100%': { backgroundColor: 'rgba(14, 21, 28, 1)' },
				},
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
				mobileMenuOn: 'mobileMenuOn 0.5s ease-in-out forwards',
				navbarOn: 'navbarOn 0.5s ease-in-out forwards',
			},
			colors: {
				customblue: {
					light: '#372D3C',
					DEFAULT: '#2F2D3C',
					dark: '#0E151C',
				},
				customRed: {
					DEFAULT: '#FC43BD',
				},
				customLightBlue: {
					DEFAULT: '#77D9E2',
				},
				brandColor: {
					DEFAULT: '#EF00C9',
					purple: '#9C00D3',
					dark: '#934E9E',
					pale: '#FF66D4',
				},
			},
			fontFamily: {
				ubuntu: ['Ubuntu', ...defaultTheme.fontFamily.sans],
				sans: ['Noto Sans SC', ...defaultTheme.fontFamily.sans],
			},
			backgroundImage: (theme) => ({
				land: "url('/bg_landsales.jpg')",
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
