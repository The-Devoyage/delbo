import Bakery from "./pages/Bakery/Bakery";
import Events from "./pages/Events/Events";
import Home from "./pages/Home/Home";
import OurFarm from "./pages/OurFarm/OurFarm";
import QuailMeat from "./pages/QuailMeat/QuailMeat";
import QuailProduct from "./pages/QuailProduct/QuailProduct";
import { RecipesPage } from "./pages/Recipes/Recipes";
import TrueOrFalse from "./pages/TrueOrFalse/TrueOrFalse";

const routes = [
  { path: "/", exact: true, name: "Home", component: Home },
  { path: "/our-farm", exact: true, name: "Our Farm", component: OurFarm },
  {
    path: "/true-or-false",
    exact: true,
    name: "True or False",
    component: TrueOrFalse,
  },
  {
    path: "/quail-meat",
    exact: true,
    name: "Quail Meat",
    component: QuailMeat,
  },
  {
    path: "/events",
    exact: true,
    name: "Events",
    component: Events,
  },
  {
    path: "/quail-product",
    exact: true,
    name: "Quail Product",
    component: QuailProduct,
  },
  {
    path: "/gourmet-bakery",
    exact: true,
    name: "Gourmet Bakery",
    component: Bakery,
  },
  {
    path: "/recipes",
    exact: true,
    name: "Recipes",
    component: RecipesPage,
  },
];

export default routes;
