import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import BeerListView from "../pages/BeerListView/BeerListView";
import BeerCategoriesView from "../pages/BeerCategoriesView/BeerCategoriesView";
import BeerInfoView from "../pages/BeerInfoView/BeerInfoView";
import RandomBeer from "../components/RandomBeer/RandomBeer";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <BeerCategoriesView />,
      },
      {
        path: "/category/:category/:id",
        element: <BeerListView />,
      },
      {
        path: "/beer/:id",
        element: <BeerInfoView />,
      },
      {
        path: "/random-beer",
        element: <RandomBeer />,
      },
    ],
  },
]);
