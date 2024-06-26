import { FunctionComponent } from "react";
import Main from "../components/pages/Main/Main";
import Shop from "../components/pages/Shop/Shop";
import ShopCart from "../components/pages/ShopCart/ShopCart";
import Account from "../components/pages/Account/Account";
import Blog from "../components/pages/Blog/Blog";
import Contacts from "../components/pages/Contacts/Contacts";
import About from "../components/pages/About/About";

interface IMainRoute {
  name: string;
  path: string;
}

export const mainRoute: IMainRoute = {
  name: "Главная",
  path: "/",
};

export const aboutRoute: IMainRoute = {
  name: "О нас",
  path: "/about",
};

export const shopRoute: IMainRoute = {
  name: "Ассортимент",
  path: "/shop",
};

export const blogRoute: IMainRoute = {
  name: "Блог",
  path: "/blog",
};

export const contactsRoute: IMainRoute = {
  name: "Контакты",
  path: "/contacts",
};

export const accountRoute: IMainRoute = {
  name: "Кабинет",
  path: "/account",
};

export const mainRoutes: IMainRoute[] = [
  mainRoute,
  aboutRoute,
  shopRoute,
  blogRoute,
  contactsRoute,
  accountRoute,
];

interface IRoute {
  path: string;
  name: string;
  Component: FunctionComponent;
}

export const routes: IRoute[] = [
  {
    path: "/",
    name: "Главная",
    Component: Main,
  },
  {
    path: "/shop",
    name: "Ассортимент",
    Component: Shop,
  },
  {
    path: "/shopCart",
    name: "Корзина",
    Component: ShopCart,
  },
  {
    path: "/account",
    name: "Кабинет",
    Component: Account,
  },
  {
    path: "/blog",
    name: "Блог",
    Component: Blog,
  },
  {
    path: "/contacts",
    name: "Контакты",
    Component: Contacts,
  },
  {
    path: "/about",
    name: "О нас",
    Component: About,
  },
];
