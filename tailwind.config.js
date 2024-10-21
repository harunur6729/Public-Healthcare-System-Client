/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {
          // primary: '#0000FF',
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: "#3A4256",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  theme: {
    extend: {
      boxShadow: {
        't-sm': '0 -2px 4px rgba(0, 0, 0, 0.05)', // Shadow at the top
      }
    },
  },
  plugins: [require("daisyui")],
}
