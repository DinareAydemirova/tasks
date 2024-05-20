/** @format */

import Layout from "../components/layout/Layout";
import Admin from "../components/pages/admin/Index";
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
  {
    path: "/admin",
    element: <Admin />,
  },
];

export default router;
