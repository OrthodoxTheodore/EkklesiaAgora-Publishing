import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1629',
          mid: '#112240',
          light: '#1a3358',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E2C97E',
          dark: '#A0822E',
        },
        parchment: '#F0E6D0',
        muted: '#8B9BB4',
      },
      fontFamily: {
        'cinzel-dec': ['var(--font-cinzel-decorative)'],
        cinzel: ['var(--font-cinzel)'],
        garamond: ['var(--font-garamond)'],
      },
    },
  },
  plugins: [],
}
export default config
