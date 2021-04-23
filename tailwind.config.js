const defaultTheme = require("tailwindcss/defaultTheme");


module.exports = {
  purge: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '400px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ['Ubuntu', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: theme => ({
        'home-supply2': "url('https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2Fddumeg9-e1573263-bdf8-4946-99b0-bc5766d66963.jpg?alt=media&token=0e396734-7552-4e3a-9ad3-f7e0a85940d1')",
        'home-supply': "url('https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2F8627.jpg?alt=media&token=0ff0893c-348e-41fa-bdf4-5153b32f04f3')",
        'home-land': "url('https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2Fmap.jpg?alt=media&token=c1683cf4-705a-4812-a56f-77da9c62a99a')",
        "home-elf": "url('https://firebasestorage.googleapis.com/v0/b/cbae-f9c77.appspot.com/o/images%2Ffrontend%2Fhome%2F1097490.jpg?alt=media&token=6bb1aaf5-8e12-47cf-827f-d723e9e5055b')"
      })
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [

  ],
  future: {
    purgeLayersByDefault: true,
  },
}
