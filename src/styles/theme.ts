import { darken, lighten } from "polished";

export type Colors = keyof typeof colors;

type BreakpointsProp<T = string> = {
  _: T;
  mobile: T;
  smTablet: T;
  mdTablet: T;
  laptop: T;
  desktop: T;
};

const colors = {
  unset: "unset",
  white: "#ffffff",
  primary: "#FE6767",
  primaryHover: "#fC7E7E",
  dark: "#545454",
  gray: "#B6B6B6",
  lightGray: "#f0f0f0",
  transparent: "#ffffffee",
};

const radii = {
  b2: "0.125rem",
  b4: "0.25rem",
  b6: "0.375rem",
  b8: "0.5rem",
  b12: "0.75rem",
  b16: "1rem",
  b24: "1.5rem",
  bFull: "9999px",
  bNone: "0px",
};

const breakpoints: BreakpointsProp = {
  _: "",
  mobile: "640px",
  smTablet: "768px",
  mdTablet: "1024px",
  laptop: "1280px",
  desktop: "1536px",
};

const fontSizes = {
  fs8: "0.5rem",
  fs10: "0.625rem",
  fs12: "0.75rem",
  fs14: "0.875rem",
  fs16: "1rem",
  fs18: "1.125rem",
  fs20: "1.25rem",
  fs24: "1.5rem",
  fs28: "1.75rem",
  fs32: "2rem",
  fs36: "2.25rem",
  fs48: "3rem",
  fs60: "3.75rem",
  fs72: "4.5rem",
  fs80: "5rem",
  fs128: "8rem",
};

const lineHeights = {
  xxl: "6.5rem",
  xxlMob: "5.25rem",
  xl: "5.875rem",
  xlMob: "4.5625rem",
  lg: "4.5625rem",
  lgMob: "3.25rem",
  md: "3.75rem",
  mdMob: "2.625rem",
  sm: "3.25rem",
  smMob: "2.125rem",
  xs: "2.625rem",
  xsMob: "2rem",
};

const fontWeights = {
  fw100: 100,
  fw200: 200,
  fw300: 300,
  fw400: 400,
  fw500: 500,
  fw600: 600,
  fw700: 700,
  fw800: 800,
  fw900: 900,
};

const space = {
  s0: "0px",
  s10: "0.625rem",
  s16: "1rem",
  s24: "1.5rem",
  s32: "2rem",
  s48: "3rem",
  s64: "4rem",
  s80: "5rem",
  s96: "6rem",
  s128: "8rem",
  s160: "10rem",
  auto: "auto",
};

const buttonStyles = {
  border: "none",
  borderRadius: radii.b6,
  cursor: "pointer",
  transition: "background .2s ease",
  "@media screen and (prefers-reduced-motion: reduce)": {
    transition: "none",
  },
};

export const theme = {
  colors,
  radii,
  fontSizes,
  lineHeights,
  fontWeights,
  space,
  buttons: {
    primary: {
      ...buttonStyles,
      fontSize: fontSizes.fs24,
      fontWeight: fontWeights.fw600,
      color: colors.white,
      backgroundColor: colors.primary,
      width: "14rem",
      height: "3rem",
      "&:hover": {
        backgroundColor: lighten(0.05, colors.primary),
      },
    },
    secondary: {
      ...buttonStyles,
      fontSize: fontSizes.fs18,
      fontWeight: fontWeights.fw500,
      color: colors.dark,
      backgroundColor: colors.white,
      width: "9rem",
      height: "2.5rem",
    },
    primarySM: {
      ...buttonStyles,
      fontSize: fontSizes.fs24,
      fontWeight: fontWeights.fw600,
      color: colors.white,
      backgroundColor: colors.primary,
      width: "9rem",
      height: "3rem",
      "&:hover": {
        backgroundColor: lighten(0.05, colors.primary),
      },
    },
    custom: {
      ...buttonStyles,
      "&:hover": {},
    },
  },
  fontFamily: { primary: "Red Hat Display" },
  breakpoints,
  borders: {
    b_primary: `1px solid ${colors.primary}`,
    b_dark: `1px solid ${colors.dark}`,
    b_gray: `1px solid ${colors.gray}`,
    b_lightGray: `1px solid ${colors.lightGray}`,
    b_white: `1px solid ${colors.white}`,
  },
  borderWidths: {
    b0: "0px",
    b1: "1px",
    b2: "2px",
    b4: "4px",
    b8: "8px",
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
      fontWeight: 700,
      lineHeight: "3.75rem",
      fontSizeMobile: "2rem",
      fontWeightMobile: 600,
      lineHeightMobile: "2.625rem",
    },
    h5: {
      fontSize: "2.5rem",
      fontWeight: 700,
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
      fontWeightMobile: 500,
      lineHeightMobile: "2rem",
    },
    body14: {
      fontSize: "0.875rem",
      lineHeight: "1.375rem",
      fontWeight: 400,
      color: colors.white,
    },
    body16: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      fontWeight: 400,
      color: colors.white,
    },
    body18: {
      fontSize: "1.125rem",
      lineHeight: "1.625rem",
      fontWeight: 400,
      color: colors.white,
    },
    body20: {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      fontWeight: 500,
      color: colors.white,
    },
    body24: {
      fontSize: "1.5rem",
      lineHeight: "2rem",
      fontWeight: 500,
      color: colors.white,
    },
    body28: {
      fontSize: "1.75rem",
      lineHeight: "2.25rem",
      fontWeight: 500,
      color: colors.white,
    },
    link: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: "2.25rem",
      color: colors.dark,
      cursor: "pointer",
    },
  },
  zIndices: { base: 0, upperElement: 1, modal: 10, loader: 11 },
} as const;

export type Theme = typeof theme;
