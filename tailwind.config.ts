/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f08e1e',
        'primary-dark': '#d67a10',
        'primary-light': '#ffb347',
        'primary-ultra-light': '#ffe8cc',
        secondary: '#2D5BE3',
        accent: '#FFD700',
        background: '#f08e1e',
        'background-dark': '#e68517',
        'background-light': '#f5a94d',
        surface: '#ffffff',
        'surface-warm': '#fff5e6',
        'text-primary': '#1A1A1A',
        'text-secondary': '#4A4A4A',
        'text-light': '#ffffff',
        border: '#1A1A1A',
        tertiary: '#F4B8B8',
        quaternary: '#5BC8E8',
      },
      fontFamily: {
        heading: ['Archivo Black', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        base: '8px',
      },
      boxShadow: {
        box: '8px 8px 0px #1A1A1A',
      },
      backgroundImage: {
        'dominant-orange': 'linear-gradient(135deg, #f08e1e 0%, #f5a94d 25%, #f08e1e 50%, #e68517 75%, #f08e1e 100%)',
      },
    },
  },
  plugins: [],
}