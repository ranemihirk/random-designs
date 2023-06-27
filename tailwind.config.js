/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  daisyui: {
    darkTheme: 'light',
  },
  important: true,
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'new-white': '#fffafa',
        'new-black': '#343434',
        'new-purple': 'hsl(243, 90%, 64%)',
        'new-bg': 'hsl(220, 5%, 90%)'
      },
      height: {
				inherit: 'inherit',
        mainScreen: 'calc(100vh - 4rem)'
			},
			width: {
				inherit: 'inherit',
			},
    },
  },
  plugins: [require("daisyui")],
}

