// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      blur: {
        xs: "2px",
      },
      animation: {
        blob: "blob 20s infinite",
        glob: "glob 40s infinite",
        plob: "plob 40s infinite",
        fall: "fall 50s infinite",
        ball: "ball 50s infinite",
        breathe: "breathe 10s infinite",
      },
      keyframes: {
        breathe: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        blob: {
          "0%": { transform: "translate(0% 0%) scale(.5)" },
          "50%": { transform: "translate(100%, 50%) scale(2.5)" },
          "100%": { transform: "translate(0%, 0%) scale(.5)" },
        },
        glob: {
          "0%": { transform: "translate(0% 0%) scale(1)" },
          "50%": { transform: "translate(-300%, 0%) scale(2.5)" },
          "100%": { transform: "translate(0%, 0%) scale(1)" },
        },
        plob: {
          "0%": { transform: "translate(0% 0%) scale(1)" },
          "25%": { transform: "translate(100%, 50%) scale(2)" },
          "50%": { transform: "translate(200%, 0%) scale(3)" },
          "75%": { transform: "translate(100%, -50%) scale(2)" },
          "100%": { transform: "translate(0%, 0%) scale(1)" },
        },
        fall: {
          "0%": { transform: "translate(0% 0%) scale(1)" },
          "10%": { transform: "translate(50%, 50%) scale(2)" },
          "20%": { transform: "translate(0%, 100%) scale(3)" },
          "30%": { transform: "translate(-50%, 150%) scale(2)" },
          "40%": { transform: "translate(0%, 200%) scale(.5)" },
          "50%": { transform: "translate(-100%, 250%) scale(2.5)" },
          "60%": { transform: "translate(0%, 200%) scale(3)" },
          "70%": { transform: "translate(150%, 150%) scale(2)" },
          "90%": { transform: "translate(50%, 50%) scale(1.5)" },
          "100%": { transform: "translate(0%, 0%) scale(1)" },
        },
        ball: {
          "0%": { transform: "translate(0% 0%) scale(1)" },
          "10%": { transform: "translate(50%, 50%) scale(1)" },
          "20%": { transform: "translate(100%, 0%) scale(1)" },
          "30%": { transform: "translate(150%, -50%) scale(1)" },
          "40%": { transform: "translate(200%, 0%) scale(1)" },
          "50%": { transform: "translate(250%, -100%) scale(1)" },
          "60%": { transform: "translate(200%, 0%) scale(1)" },
          "70%": { transform: "translate(150%, 150%) scale(1)" },
          "100%": { transform: "translate(0%, 0%) scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
