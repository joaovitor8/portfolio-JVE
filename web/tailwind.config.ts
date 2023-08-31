import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        RGBConfg: {
          "0%": { background: "rgb(250, 0, 0)" },
          "25%": { background: "rgb(0, 250, 0)" },
          "75%": { background: "rgb(0, 0, 250)" },
          "100%": { background: "rgb(250, 0, 0)" },
        }
      },
      animation: {
        "rgbAnim": "RGBConfg 4s linear infinite"
      },
      boxShadow: {
        "sombraLadosIguais": "1px 1px 15px"
      },
      boxShadowColor: {
        "sombraRGB": "red"
      }
    },
  },
  plugins: [],
}
export default config
