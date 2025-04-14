import { MainMenu } from "@/types";
import { starter } from "./starter";
import { tandoori } from "./tandoori";
import { nepalese } from "./nepalese";
import { chef } from "./chef";
import { indianDishes } from "./indianDish";
import { veg } from "./veg";
import { biryani } from "./biryani";
import { riceAndNaanDishes } from "./riceAndNaan";
import { momo } from "./momo";

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
    title: "Indian Dishes",
    special:
      "Chicken £9.00 / Vegetable £7.00, Lamb £10.50 / Prawn £11.00 / King Prawn £12.50",
    menu: [...indianDishes],
  },
  {
    title: "Chef's Special Dishes",
    menu: [...chef],
  },
  {
    title: "Veg Side Dishes",
    menu: [...veg],
  },
  {
    title: "Biryani",
    menu: [...biryani],
  },
  {
    title: "Rice / Naan",
    menu: [...riceAndNaanDishes],
  },
  {
    title: "Chicken MOMO",
    menu: [...momo],
  },
  {
    title: "Chowmein",
    special:
      "Veg £8.00 / Chicken £9.00, Lamb £10.50 / Keema 10.50 / Special 10.50",
    menu: [],
  },
];
