import students from "assets/images/students.png";
import gatsbyImg from "assets/images/icon.png";

import logoImg from "assets/images/FoodieLand.png";
import badgeImg from "assets/images/badge.png";
import bakedChickenImg from "assets/images/baked_chicken.png";
import chickenSaladImg from "assets/images/chicken_salad.png";
import chiefImg from "assets/images/chief.png";

import cakeImg from "assets/images/categories/cake.png";
import chocolateImg from "assets/images/categories/choco.png";
import meatImg from "assets/images/categories/meat.png";
import rockImg from "assets/images/categories/rock_house.png";
import saladImg from "assets/images/categories/salad.png";
import sandwichImg from "assets/images/categories/sandwich.png";

import adImg from "assets/images/grid_imgs/ad.png";
import americanPancakeImg from "assets/images/grid_imgs/american_pancake.png";
import burgerImg from "assets/images/grid_imgs/burger.png";
import fishImg from "assets/images/grid_imgs/fish.png";
import greekSaladImg from "assets/images/grid_imgs/greek_salad.png";
import meatSaladImg from "assets/images/grid_imgs/meat.png";
import spaghettiImg from "assets/images/grid_imgs/mermeshel.png";
import pancakeImg from "assets/images/grid_imgs/pancake.png";
import riceImg from "assets/images/grid_imgs/rice.png";

import eggSaladsImg from "assets/images/salads/egg_salads.png";
import redSaladsImg from "assets/images/salads/red_salads.png";

export type Visuals = keyof typeof visuals;
export const visuals: Record<string, string> = {
	students,
	gatsbyImg,

	logoImg
	badgeImg,
	bakedChickenImg,
	chickenSaladImg,
	chiefImg,
	cakeImg,
	chocolateImg
	meatImg,
	rockImg,
	saladImg,
	sandwichImg,
	logoImg,
	adImg
	americanPancakeImg,
	burgerImg,
	fishImg
	greekSaladImg,
	meatSaladImg,
	spaghettiImg,
	pancakeImg,
	riceImg,
	redSaladsImg,
	eggSaladsImg,
};
