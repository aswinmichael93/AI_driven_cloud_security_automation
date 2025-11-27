module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon1: "#08f7fe",
        neon2: "#00ff9f",
        neon3: "#ff005c",
        neon4: "#f7ff00"
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, #1f2933 1px, transparent 0)"
      }
    }
  },
  plugins: []
};
