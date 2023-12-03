import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#181818",
        secondary: "#2f2f2f",
        accent: "#f3ae9f",
        background: "#050505",
        white: "#f0f0f0",
        black: "#050505",
        muted : "#7c847e",
      }
    },
  },
  plugins: [],
}
export default config
