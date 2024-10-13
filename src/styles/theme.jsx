export const theme = {
    colors: {
      primary: {
        50: "#C4E4F6",
        100: "#A8D3ED",
        200: "#A8D3ED",
        300: "#70B2DD",
        400: "#3892CD",
        500: "#0071BC",
        DEFAULT: "#0071BC",
        600: "#005D9A",
        700: "#004979",
        800: "#003458",
        900: "#002A47",
      },
      secondary: {
        50: "#E8EAF6",
        100: "#C5CAE9",
        200: "#9FA8DA",
        300: "#7986CB",
        400: "#5C6BC0",
        500: "#3F51B5",
        600: "#3949AB",
        700: "#303F9F",
        DEFAULT: "#303F9F",
        800: "#2A378E",
        900: "#1B2679",
      },
      tertiary: {
        50: "#FEF3E1",
        100: "#FDE1B5",
        200: "#FDCE86",
        300: "#FCBA56",
        400: "#FCAB35",
        500: "#FB9D20",
        600: "#F7911D",
        700: "#F1821A",
        DEFAULT: "#F1821A",
        800: "#EA7317",
        900: "#E05B14",
      },
      gray: {
        0: "#FFFFFF",
        50: "#F1F1F5",
        100: "#E1E1E1",
        200: "#BBBBBB",
        300: "#999999",
        400: "#888888",
        500: "#767676",
        600: "#666666",
        700: "#505050",
        800: "#333333",
        900: "#111111",
      },
    }, 
    fontSizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem',// 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem',  // 72px
      '8xl': '6rem',    // 96px
    },
    fontWeights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1920px',
    },
    spacing: {
    },
    typography: {
      display: {
        1: { fontSize: '6rem', lineHeight: 1.167 },      // 96px
        2: { fontSize: '5.5rem', lineHeight: 1.2 },      // 88px
        3: { fontSize: '5rem', lineHeight: 1.167 },      // 80px
        4: { fontSize: '4.5rem', lineHeight: 1.235 },    // 72px
        5: { fontSize: '4rem', lineHeight: 1.334 },      // 64px
        6: { fontSize: '3.5rem', lineHeight: 1.2 },      // 56px
      },
      headline: {
        1: { fontSize: '3rem', lineHeight: 1.167 },      // 48px
        2: { fontSize: '2.5rem', lineHeight: 1.2 },      // 40px
        3: { fontSize: '2rem', lineHeight: 1.167 },      // 32px
        4: { fontSize: '1.75rem', lineHeight: 1.235 },   // 28px
        5: { fontSize: '1.5rem', lineHeight: 1.334 },    // 24px
        6: { fontSize: '1.25rem', lineHeight: 1.6 },     // 20px
      },
      title: {
        1: { fontSize: '2rem', lineHeight: 1.167 },      // 32px
        2: { fontSize: '1.75rem', lineHeight: 1.2 },     // 28px
        3: { fontSize: '1.5rem', lineHeight: 1.167 },    // 24px
        4: { fontSize: '1.25rem', lineHeight: 1.235 },   // 20px
        5: { fontSize: '1.125rem', lineHeight: 1.334 },  // 18px
      },
      body: {
        1: { fontSize: '1rem', lineHeight: 1.5 },        // 16px
        2: { fontSize: '0.9375rem', lineHeight: 1.43 },  // 15px
        3: { fontSize: '0.875rem', lineHeight: 1.43 },   // 14px
        4: { fontSize: '0.8125rem', lineHeight: 1.43 },  // 13px
      },
      caption: {
        1: { fontSize: '0.8125rem', lineHeight: 1.4 },   // 13px
        2: { fontSize: '0.75rem', lineHeight: 1.4 },     // 12px
      },
      label: {
        1: { fontSize: '0.6875rem', lineHeight: 1.4 },   // 11px
      },
      button: {
        1: { fontSize: '1rem', lineHeight: 1.75 },       // 16px
        2: { fontSize: '0.875rem', lineHeight: 1.75 },   // 14px
        3: { fontSize: '0.8125rem', lineHeight: 1.75 },  // 13px
      },
    },
  };

  export const media = {
    sm: `@media (min-width: ${theme.breakpoints.sm})`,
    md: `@media (min-width: ${theme.breakpoints.md})`,
    lg: `@media (min-width: ${theme.breakpoints.lg})`,
    xl: `@media (min-width: ${theme.breakpoints.xl})`,
    '2xl': `@media (min-width: ${theme.breakpoints['2xl']})`,
  };