module.exports = {
  enabled: true,
  purge: ['./*.html', './src/**/*.{vue,js,ts,jsx,tsx,css}'],
  darkMode: 'class', // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          DEFAULT: '#FF5E0E',
          light: '#FEB700'
        },
        secondary: {
          DEFAULT: '#151515',
          light: '#1e1e1e',
          dark: '#000',
        },
        sideColor: {
          DEFAULT: '#fff',
          light: '#fff',
          dark: '#FEF5F5',
        },
      },
      spacing: {
        
      },
      width: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '10%': '10%',
        '7%': '7%',
        '80vw': '80vw',
      },
      height: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '10%': '10%',
        '5%': '5%',
        '90vh': '90vh',
        '80vh': '80vh',
        '55vh': '55vh',
        '30vh': '40vh',
        '10vh': '10vh',
      },
      minWidth: {
        '0': '0',
        '1/10': '15%',
        '1/6': '16.66667%',
        '1/5': '20%',
        '1/4': '25%',
        '1/2': '50%',
        '1/3': '33.3333333%',
        '3/4': '75%',
        'md': '768px',
      },
      maxWidth: {
        '0': '0',
        '1/10': '15%',
        '1/6': '16.66667%',
        '1/5': '20%',
        '1/4': '25%',
        '1/2': '50%',
        '1/3': '33.3333333%',
        '3/4': '75%',
        'md': '768px',
      },
      minHeight: {
        '0': '0',
        '5%': '5%',
        '1/10': '15%',
        '1/6': '16.66667%',
        '1/5': '20%',
        '1/4': '25%',
        '1/2': '50%',
        '1/3': '33.3333333%',
        '3/4': '75%',
        '9/10': '90%',
        '90vh': '90vh',
      },
      maxHeight: {
        '0': '0',
        '5%': '5%',
        '1/10': '15%',
        '1/6': '16.66667%',
        '1/4': '25%',
        '1/2': '50%',
        '1/3': '33.3333333%',
        '3/4': '75%',
        '9/10': '90%',
      },
      boxShadow: {
        'card': '#34D178 -4px 7px 5px, #34D178 4px 7px 5px, #34D178 0px 5px 3px'
      },
      fontFamily: {
        primary: 'Open Sans, sans-serif',
        secondary: '',
      },
      animation: {
        transL: 'slideL 500ms linear',
        transR: 'slideR 500ms linear',
      },
      keyFrames: {
        slideL: {
          '0%': {transforom : 'translateX(-100%);', opacity: '0'},
          '100%': {transforom : 'translateX(0%)'},
        },
        slideR: {
          '0%': {transforom : 'translateX(100%)'},
          '100%': {transforom : 'translateX(0%)'},
        }
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'group-focus'],
      content: ['group-focus'],
    },
  },
  plugins: [],
}
