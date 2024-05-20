/** @format */

import Layout from "../components/layout/Layout";
import Basket from "../components/pages/basket/Index";
import Home from "../components/pages/home/Index";
import Hero from "../components/pages/home/hero/Index";
import Wishlist from "../components/pages/wishlist/Index";

const router = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
];

export default router;
