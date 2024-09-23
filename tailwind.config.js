/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
			boxShadow: {
        'card': '0px 32px 30px 0px rgba(54, 33, 96, 0.10)',
      },
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'cta-gradient': 'linear-gradient(90deg, rgba(173, 255, 0, 0.70) 0%, #ADFF00 100%)',
				'card-gradient': 'linear-gradient(123deg, rgba(51, 51, 51, 0.15) 13.33%, rgba(51, 51, 51, 0.60) 93.04%)'
  		},
  		colors: {
				'primary': '#1E1E1E',
  			'link-green': '#00FF38',
				'text-secondary': '#ACACAC'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
