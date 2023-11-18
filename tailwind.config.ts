import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '450px',
        ...defaultTheme.screens,
      },
      backgroundImage: {
        'homebg3': "url('/Images/bg3.png')",
        'mbbg': "url('/Images/mobilebg.png')"
      },
      fontSize: {
        sm: '1.25rem',
        base: '1.5rem',
        lg: '2.5rem',
        xl: '3rem',
      },
      colors: {
        'r-blue': '#000da1',
      },
    },
  },
  plugins: [],
}
export default config
