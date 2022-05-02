export type Colors = keyof typeof colors;

type BreakpointsProp<T = string> = {
  _: T;
  lmobile: T;
  ltablet: T;
  desktop: T;
};

const colors = {
  white: "#ffffff",
  primary: "#101326",
  secondary: "#29C0CD",
  accent: "#E34578",
};

const breakpoints: BreakpointsProp = {
  _: "",
  lmobile: "24rem",
  ltablet: "48rem",
  desktop: "90rem",
};

export const theme = {
  colors,
  fontFamily: { primary: "Red Hat Display" },
  fontSizes: {
    fs12: "0.75rem",
    fs14: "0.875rem",
    fs16: "1rem",
    fs18: "1.125rem",
    fs20: "1.25rem",
    fs36: "2.25rem",
    fs48: "3rem",
    fs60: "3.75rem",
    fs72: "4.5rem",
    fs128: "8rem",
  },
  fontWeights: {
    fw100: 100,
    fw200: 200,
    fw300: 300,
    fw400: 400,
    fw500: 500,
    fw600: 600,
    fw700: 700,
    fw800: 800,
    fw900: 900,
  },
  breakpoints,
  space: {
    s16: "1rem",
    s32: "2rem",
    s48: "3rem",
    s64: "4rem",
    s80: "5rem",
    s96: "6rem",
  },
  borders: {
    b_solid: "1px solid #000000",
    b_dashed: "1px dashed #000000",
    b_dotted: "1px dotted #000000",
  },
  borderWidths: {
    b0: "0px",
    b1: "1px",
    b2: "2px",
    b4: "4px",
    b8: "8px",
  },
  radii: {
    b2: "0.125rem",
    b4: "0.25rem",
    b6: "0.375rem",
    b8: "0.5rem",
    b12: "0.75rem",
    b16: "1rem",
    b24: "1.5rem",
    bFull: "9999px",
    bNone: "0px",
  },
  typography: {
    h1: {
      fontSize: "5rem",
      fontWeight: 500,
      lineHeight: "6.5rem",
      fontSizeMobile: "4rem",
      fontWeightMobile: 500,
      lineHeightMobile: "5.25rem",
    },
    h2: {
      fontSize: "4.5rem",
      fontWeight: 500,
      lineHeight: "5.875rem",
      fontSizeMobile: "3.5rem",
      fontWeightMobile: 500,
      lineHeightMobile: "4.5625rem",
    },
    h3: {
      fontSize: "3.5rem",
      fontWeight: 600,
      lineHeight: "4.5625rem",
      fontSizeMobile: "2.5rem",
      fontWeightMobile: 600,
      lineHeightMobile: "3.25rem",
    },
    h4: {
      fontSize: "3rem",
      fontWeight: 600,
      lineHeight: "3.9375rem",
      fontSizeMobile: "2rem",
      fontWeightMobile: 600,
      lineHeightMobile: "2.625rem",
    },
    h5: {
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: "3.25rem",
      fontSizeMobile: "1.625rem",
      fontWeightMobile: 600,
      lineHeightMobile: "2.125rem",
    },
    h6: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: "2.625rem",
      fontSizeMobile: "1.5rem",
      fontWeightMobile: 600,
      lineHeightMobile: "2rem",
    },
  },
  zIndices: { base: 0, upperElement: 1, modal: 10, loader: 11 },
} as const;

export type Theme = typeof theme;
