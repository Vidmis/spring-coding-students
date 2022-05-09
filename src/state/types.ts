type People = "Viktorija" | "Vidmis" | "Martyna" | "Nojus"; //NOTE: Type might be not only strings

export enum Foods {
  GRYBAI = "grybukai",
  BURGERIUKAI = "burgeriuksai",
  CEPAI = "cepelinai",
  SALDUMYNAI = "sokoladai",
}

export interface Foodies {
  id: number;
  name: People;
  food: Foods;
}
