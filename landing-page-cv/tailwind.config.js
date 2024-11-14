/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '475px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        custom: {
          main1: '#0a1930',
          main2: '#79f1dd',
          main3: '#8792af',

          dark: '#112240',
          light: '#ccd7f7',
        },
      },
    },
  },
  plugins: [],
};
