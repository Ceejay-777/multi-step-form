export const navlinks = [1, 2, 3, 4];
import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

export const monthlyPlan = [
  { arcade: { image: arcadeIcon, plan: "Arcade", price: "$9/mo" } },
  { advanced: { image: advancedIcon, plan: "Advanced", price: "$12/mo" } },
  { pro: { image: proIcon, plan: "Pro", price: "$15/mo" } },
];

export const yearlyPlan = [
  {
    arcade: {
      image: arcadeIcon,
      plan: "Arcade",
      price: "$90/yr",
      promo: "2 months free",
    },
  },
  {
    advanced: {
      image: advancedIcon,
      plan: "Advanced",
      price: "$120/yro",
      promo: "2 months free",
    },
  },
  {
    pro: {
      image: proIcon,
      plan: "Pro",
      price: "$150/yr",
      promo: "2 months free",
    },
  },
];
