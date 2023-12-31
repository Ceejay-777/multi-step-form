import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

export const navlinks = [
  [1, "your info"],
  [2, "select plan"],
  [3, "add-ons"],
  [4, "summary"],
];
export const monthlyPlan = [
  { image: arcadeIcon, plan: "Arcade", price: "9" },
  { image: advancedIcon, plan: "Advanced", price: "12" },
  { image: proIcon, plan: "Pro", price: "15" },
];

export const yearlyPlan = [
  {
    image: arcadeIcon,
    plan: "Arcade",
    price: "90",
    promo: "2 months free",
  },
  {
    image: advancedIcon,
    plan: "Advanced",
    price: "120",
    promo: "2 months free",
  },
  {
    image: proIcon,
    plan: "Pro",
    price: "150",
    promo: "2 months free",
  },
];

export const addons = [
  {
    addon: "Online service",
    perk: "Access to multiplayer games",
    monthlyPrice: "1",
    yearlyPrice: "10",
  },
  {
    addon: "Larger storage",
    perk: "Extra 1TB of cloud save",
    monthlyPrice: "2",
    yearlyPrice: "20",
  },
  {
    addon: "Customizable profile",
    perk: "Custom theme on your profile",
    monthlyPrice: "2",
    yearlyPrice: "20",
  },
];
