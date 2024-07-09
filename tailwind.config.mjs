/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				// 'roboto': ['Roboto', 'sans-serif'],
				'anton': ['"Anton SC"', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
        require("daisyui"),
	],
}
