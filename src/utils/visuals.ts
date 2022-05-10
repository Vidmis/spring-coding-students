import logoImg from "assets/images/pepeLogo.png";
import bikeLandingImg from "assets/images/bikeLanding.png";

export type Visuals = keyof typeof visuals;
export const visuals: Record<string, string> = {
  logoImg,
  bikeLandingImg,
};
