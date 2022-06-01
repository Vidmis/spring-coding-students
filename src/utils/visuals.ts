import roadBikeImg from "assets/images/roadBike.png";
import mtbBikeImg from "assets/images/mountainBike.png";

export type Visuals = keyof typeof visuals;
export const visuals: Record<string, string> = {
  roadBikeImg,
  mtbBikeImg,
};
