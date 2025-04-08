export type SubMenu = {
  title: string;
  price: number | string;
  description: string;
};

export type MainMenu = {
  title: string;
  menu: SubMenu[];
  special?: string;
};
