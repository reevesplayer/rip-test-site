// tailwind.config.js
const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ".src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      "themes": {
        "light": {
          "colors": {
            "default": {
              "50": "#fafafa",
              "100": "#f2f2f3",
              "200": "#ebebec",
              "300": "#e3e3e6",
              "400": "#dcdcdf",
              "500": "#d4d4d8",
              "600": "#afafb2",
              "700": "#8a8a8c",
              "800": "#656567",
              "900": "#404041",
              "foreground": "#000",
              "DEFAULT": "#d4d4d8"
            },
            "primary": {
              "50": "#fde3e4",
              "100": "#fabbbd",
              "200": "#f69397",
              "300": "#f36b71",
              "400": "#f0434a",
              "500": "#ed1b24",
              "600": "#c4161e",
              "700": "#9a1217",
              "800": "#710d11",
              "900": "#47080b",
              "foreground": "#000",
              "DEFAULT": "#ed1b24"
            },
            "secondary": {
              "50": "#ffffff",
              "100": "#fefefe",
              "200": "#fefefe",
              "300": "#fdfdfd",
              "400": "#fdfdfd",
              "500": "#fcfcfc",
              "600": "#d0d0d0",
              "700": "#a4a4a4",
              "800": "#787878",
              "900": "#4c4c4c",
              "foreground": "#000",
              "DEFAULT": "#fcfcfc"
            },
            "success": {
              "50": "#dfdfdf",
              "100": "#b3b3b3",
              "200": "#868686",
              "300": "#595959",
              "400": "#2d2d2d",
              "500": "#000000",
              "600": "#000000",
              "700": "#000000",
              "800": "#000000",
              "900": "#000000",
              "foreground": "#fff",
              "DEFAULT": "#000000"
            },
            "warning": {
              "50": "#f2f2f2",
              "100": "#dfdfdf",
              "200": "#cccccc",
              "300": "#b9b9b9",
              "400": "#a7a7a7",
              "500": "#949494",
              "600": "#7a7a7a",
              "700": "#606060",
              "800": "#464646",
              "900": "#2c2c2c",
              "foreground": "#000",
              "DEFAULT": "#949494"
            },
            "danger": {
              "50": "#f0e3e3",
              "100": "#dcbcbc",
              "200": "#c79494",
              "300": "#b36d6d",
              "400": "#9e4545",
              "500": "#8a1e1e",
              "600": "#721919",
              "700": "#5a1414",
              "800": "#420e0e",
              "900": "#290909",
              "foreground": "#fff",
              "DEFAULT": "#8a1e1e"
            },
            "background": "#ffffff",
            "foreground": "#000000",
            "content1": {
              "DEFAULT": "#ffffff",
              "foreground": "#000"
            },
            "content2": {
              "DEFAULT": "#f4f4f5",
              "foreground": "#000"
            },
            "content3": {
              "DEFAULT": "#e4e4e7",
              "foreground": "#000"
            },
            "content4": {
              "DEFAULT": "#d4d4d8",
              "foreground": "#000"
            },
            "focus": "#006FEE",
            "overlay": "#000000"
          }
        },
        "dark": {
          "colors": {
            "default": {
              "50": "#e1e1e1",
              "100": "#b7b7b7",
              "200": "#8d8d8d",
              "300": "#646464",
              "400": "#3a3a3a",
              "500": "#101010",
              "600": "#0d0d0d",
              "700": "#0a0a0a",
              "800": "#080808",
              "900": "#050505",
              "foreground": "#fff",
              "DEFAULT": "#101010"
            },
            "primary": {
              "50": "#fde3e4",
              "100": "#fabbbd",
              "200": "#f69397",
              "300": "#f36b71",
              "400": "#f0434a",
              "500": "#ed1b24",
              "600": "#c4161e",
              "700": "#9a1217",
              "800": "#710d11",
              "900": "#47080b",
              "foreground": "#000",
              "DEFAULT": "#ed1b24"
            },
            "secondary": {
              "50": "#ffffff",
              "100": "#fefefe",
              "200": "#fefefe",
              "300": "#fdfdfd",
              "400": "#fdfdfd",
              "500": "#fcfcfc",
              "600": "#d0d0d0",
              "700": "#a4a4a4",
              "800": "#787878",
              "900": "#4c4c4c",
              "foreground": "#000",
              "DEFAULT": "#fcfcfc"
            },
            "success": {
              "50": "#dfdfdf",
              "100": "#b3b3b3",
              "200": "#868686",
              "300": "#595959",
              "400": "#2d2d2d",
              "500": "#000000",
              "600": "#000000",
              "700": "#000000",
              "800": "#000000",
              "900": "#000000",
              "foreground": "#fff",
              "DEFAULT": "#000000"
            },
            "warning": {
              "50": "#f2f2f2",
              "100": "#dfdfdf",
              "200": "#cccccc",
              "300": "#b9b9b9",
              "400": "#a7a7a7",
              "500": "#949494",
              "600": "#7a7a7a",
              "700": "#606060",
              "800": "#464646",
              "900": "#2c2c2c",
              "foreground": "#000",
              "DEFAULT": "#949494"
            },
            "danger": {
              "50": "#f0e3e3",
              "100": "#dcbcbc",
              "200": "#c79494",
              "300": "#b36d6d",
              "400": "#9e4545",
              "500": "#8a1e1e",
              "600": "#721919",
              "700": "#5a1414",
              "800": "#420e0e",
              "900": "#290909",
              "foreground": "#fff",
              "DEFAULT": "#8a1e1e"
            },
            "background": "#161616",
            "foreground": "#ffffff",
            "content1": {
              "DEFAULT": "#18181b",
              "foreground": "#fff"
            },
            "content2": {
              "DEFAULT": "#27272a",
              "foreground": "#fff"
            },
            "content3": {
              "DEFAULT": "#3f3f46",
              "foreground": "#fff"
            },
            "content4": {
              "DEFAULT": "#52525b",
              "foreground": "#fff"
            },
            "focus": "#006FEE",
            "overlay": "#ffffff"
          }
        }
      },
      "layout": {
        "disabledOpacity": "0.4"
      }
    })
  ]
};

