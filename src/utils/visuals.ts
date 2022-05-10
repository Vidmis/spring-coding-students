import logoImg from "assets/images/pepeLogo.png";

export type Visuals = keyof typeof visuals;
export const visuals: Record<string, string> = {
  logoImg,
};
