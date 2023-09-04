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
        },
        pisca: {
          "0%": { "border-right-color": "3px solid rgba(204, 204, 204, 0.7)" },
          "100%": { "border-right-color": "transparent" },
        },
        Escrever: { 
          "0%": {"width": "0"},
          "50%": {"width": "5em"},
          "100%": {"width": "11em"},
        }
      },
      animation: {
        "rgbAnim": "RGBConfg 30s linear infinite",
        "linha": "pisca .4s steps(50) infinite normal, Escrever 3s steps(50) .5s normal both"
      },
      boxShadow: {
        "sombraLadosIguais": "1px 1px 15px"
      },
      // boxShadowColor: {
      //   "sombraRGB": "red"
      // }
    },
  },
  plugins: [],
}
export default config
