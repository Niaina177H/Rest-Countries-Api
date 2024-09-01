import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container:{
      center: true
    },
    screens: {
      'xs':'20px',
      'sm':'540px',
      'md':'800px',
      'lg':'1000px',
      'xl':'1100px'
    },
    extend: {
      fontSize: {
        base: '100px'
      },
      height: {
        'md-auto': "calc(100% - 55px)"
      },
      colors: {
        'vuejs': "hsl(360, 90%, 50%)"
      },
      borderWidth:{
        '1': "1px"
      },
      fontWeight:{
        '300': '300',
        '600': '600',
        '800': '800'
      },
      backgroundColor:{
        'lighter': 'hsl(0, 0%, 98%)',
        'darker': 'hsl(207, 26%, 17%)',
        'subdarker': 'hsl(209, 23%, 22%)',
        'sublighter': 'hsl(0, 0%, 100%)'
      },
      textColor: {
        'lighter': 'hsl(200, 15%, 8%)',
        'darker': 'hsl(0, 0%, 100%)'
      },
      boxShadow: {
        'forall': '0px 1px 6px rgba(100, 100, 100, .4)'
      },
    },
  },
  plugins: [],
};
export default config;
