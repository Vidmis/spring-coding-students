import { spaghettiImg } from "assets/images/grid_imgs/mermeshel.png";
import { riceImg } from "assets/images/grid_imgs/rice.png";
import { meatSaladImg } from "assets/images/grid_imgs/meat.png";
import { greekSaladImg } from "assets/images/grid_imgs/greek_salad.png";
import { americanPancakeImg } from "assets/images/grid_imgs/american_pancake.png";
import { pancakeImg } from "assets/images/grid_imgs/pancake.png";
import { fishImg } from "assets/images/grid_imgs/fish.png";
import { burgerImg } from "assets/images/grid_imgs/burger.png";
import { chocolateImg } from "assets/images/categories/choco.png";
import { sandwichImg } from "assets/images/categories/sandwich.png";
import { cakeImg } from "assets/images/categories/cake.png";
import { meatImg } from "assets/images/categories/meat.png";
import { saladImg } from "assets/images/categories/salad.png";
import { rockImg } from "assets/images/categories/rock_house.png";

interface ICategoriesProps {
  image: string;
  title: string;
  color: string;
}

interface IRecipesProps {
  image: string;
  title: string;
  time: string;
  foodType: string;
}

export const MENU_LIST = ["Home", "Recipes", "Blog", "Contact", "About us"];

export const CATEGORIES_LIST: ICategoriesProps[] = [
  {
    image: "rockImg",
    title: "Breakfast",
    color:
      "linear-gradient(180deg, rgba(112,130,70,0) 0%, rgba(112,130,70,0.1) 100%)",
  },
  {
    image: "saladImg",
    title: "Vegan",
    color:
      "linear-gradient(180deg, rgba(108,198,63,0) 0%, rgba(108,198,63,0.1) 100%)",
  },
  {
    image: "meatImg",
    title: "Meat",
    color:
      "linear-gradient(180deg, rgba(204, 38, 27,0) 0%, rgba(204, 38, 27,0.1) 100%)",
  },
  {
    image: "cakeImg",
    title: "Dessert",
    color:
      "linear-gradient(180deg, rgba(240, 158, 0,0) 0%, rgba(240, 158, 0,0.1) 100%)",
  },
  {
    image: "sandwichImg",
    title: "Lunch",
    color: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)",
  },
  {
    image: "chocolateImg",
    title: "Chocolate",
    color: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.1) 100%)",
  },
];

export const RECIPES_LIST: IRecipesProps[] = [
  {
    image: "burgerImg",
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutes",
    foodType: "Snack",
  },
  {
    image: "fishImg",
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    time: "30 Minutes",
    foodType: "Fish",
  },
  {
    image: "americanPancakeImg",
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    time: "30 Minutes",
    foodType: "Breakfast",
  },
  {
    image: "greekSaladImg",
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    time: "30 Minutes",
    foodType: "Healthy",
  },
  {
    image: "meatSaladImg",
    title: "Chicken Meatballs with Cream Cheese",
    time: "30 Minutes",
    foodType: "Meat",
  },
  {
    image: "pancakeImg",
    title: "Fruity Pancake with Orange & Blueberry",
    time: "30 Minutes",
    foodType: "Sweet",
  },
  {
    image: "riceImg",
    title: "The Best Easy One Pot Chicken and Rice",
    time: "30 Minutes",
    foodType: "Snack",
  },
  {
    image: "spaghettiImg",
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    time: "30 Minutes",
    foodType: "Noodles",
  },
];
