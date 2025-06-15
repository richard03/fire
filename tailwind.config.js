/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#1f2937', // text-gray-800
            a: {
              color: '#2563eb', // text-blue-600
              '&:hover': {
                color: '#1d4ed8', // text-blue-800
              },
            },
            strong: {
              color: '#1f2937', // text-gray-800
            },
            h1: {
              color: '#1f2937', // text-gray-800
            },
            h2: {
              color: '#1f2937', // text-gray-800
            },
            h3: {
              color: '#1f2937', // text-gray-800
            },
            h4: {
              color: '#1f2937', // text-gray-800
            },
            code: {
              color: '#1f2937', // text-gray-800
            },
            li: {
              color: '#1f2937', // text-gray-800
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 