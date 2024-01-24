/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      visibility: ["group-hover"],
      colors: {
        "primary": "#4e5560",
        "secondary": "#ffffff",
        "btn-primary":"#ff4545"
      },
    },
  },
  plugins: [],
}
