import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homebg': "url('/Images/bg.jpg')",
        'homebg2': "url('/Images/homebg.jpg')",
        'homebg3': "url('/Images/bg3.png')",
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
