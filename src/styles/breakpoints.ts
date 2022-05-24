import { useMediaQuery } from "react-responsive";

export const mobile = "(min-width: 640px)"; //640px
export const smTablet = "(min-width: 768px)"; //768px
export const mdTablet = "(min-width: 1024px)"; //1024px
export const laptop = "(min-width: 1280px)"; //1280px
export const desktop = "(min-width: 1536px)"; //1536px

export const useQuery = () => ({
  isMobile: useMediaQuery({ query: mobile }),
  isTablet: useMediaQuery({ query: smTablet }),
  isLaptop: useMediaQuery({ query: laptop }),
  isDesktop: useMediaQuery({ query: desktop }),
});
