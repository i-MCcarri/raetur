/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // This tells Tailwind to scan your Next.js files
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0A0A0A',
        dragonGreen: '#39FF14',
        nordicPurple: '#800080',
        bronze: '#CD7F32',
      },
    },
  },
  plugins: [],
}