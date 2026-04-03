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
        primary: '#FF5733',
        secondary: '#2D5BE3',
        accent: '#FFD700',
        background: '#F5F0E8',
        surface: '#FFFFFF',
        'text-primary': '#1A1A1A',
        'text-secondary': '#4A4A4A',
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
    },
  },
  plugins: [],
}