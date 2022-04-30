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
    fs16: "1rem",
  },
  fontWeights: {
    fw700: 700,
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
  typography: {
    h1: {
      fonstSize: "5rem",
      fontSizeMobile: "4rem",
      lineHeight: "5.5rem",
      fontWeight: 700,
    },
  },
} as const;

export type Theme = typeof theme;
