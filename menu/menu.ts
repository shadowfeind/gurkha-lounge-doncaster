import { MainMenu } from "@/types";
import { starter } from "./starter";
import { tandoori } from "./tandoori";
import { nepalese } from "./nepalese";
import { chef } from "./chef";

export const dishMenu: MainMenu[] = [
  {
    title: "Starters",
    menu: [...starter],
  },
  {
    title: "Tandoori Dishes",
    special:
      "All dishes marinated in our special sause & spcies then cooked in a clay oven. Served with salad and mint sauce",
    menu: [...tandoori],
  },
  {
    title: "Nepalese Dishes",
    special: "Lamb £9.50 / Vegetable £7.50, Prawn £9.50 / King Prawn £11.50",
    menu: [...nepalese],
  },
  {
    title: "Chef's Dishes",
    menu: [...chef],
  },
];
