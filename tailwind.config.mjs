/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		screens: {
			'sm': '375px',
			// => @media (min-width: 576px) { ... }
			'md': '768px',
			// => @media (min-width: 960px) { ... }
			'lg': '1440px',
			// => @media (min-width: 1440px) { ... }
		},
		colors: {
			'deep-purple': '#755CDE',
			'burnt-orange': '#F6A560',
			'light-coral': '#F39E9E',
			'coral-pink': '#EB7565',
			'turquoise': '#61C4B7',
			'dark-plum': '#552049',
			'ash-gray': '#7A746E',
			'pale-cream': '#FFF7F0',
			'jet-black': '#030303',
		},
		fontSize: {
			// headings
			'heading-1': ['1rem', { lineHeight: 'normal', fontWeight: '700' }],
			'heading-1-5': ['1.5rem', { lineHeight: 'normal', fontWeight: '700' }],
			'heading-1-625': ['1.625rem', { lineHeight: 'normal', fontWeight: '700' }],
			'heading-2': ['2rem', { lineHeight: 'normal', fontWeight: '700' }],
			'heading-2-25': ['2.25rem', { lineHeight: 'normal', fontWeight: '700' }],
			'heading-2-5': ['2.5rem', { lineHeight: 'normal', fontWeight: '700' }],
			'heading-2-75': ['2.75rem', { lineHeight: 'normal', fontWeight: '700' }],
			'heading-3-5': ['3.5rem', { lineHeight: 'normal', fontWeight: '700' }],

			// body
			'body-1': ['1rem', { lineHeight: '162.5%', fontWeight: '500' }],
			'body-1-125': ['1.125rem', { lineHeight: '155.556%', fontWeight: '500' }],

			// button-text
			'button-0-875': ['0.875rem', { lineHeight: '175%', fontWeight: '700' }],
			'button-1': ['1rem', { lineHeight: '175%', fontWeight: '700' }],
		},
	},
	plugins: [],
}
