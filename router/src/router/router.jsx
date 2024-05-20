import Layout from "../Layout/Layout";
import Navbar from "../Layout/navbar/İndex";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Service from "../pages/Service";

const routes = [
    {
      path: "/",
      element:<Layout />,
      children: [
       
          {
            path:"/home",
            element: <Home/>
        
          },
          {
            path:"/about",
            element: < About/>
        
          },
          {
            path:"/contact",
            element: < Contact/>
        
          },
          {
            path:"/blog",
            element: < Blog/>
        
          },
          {
            path:"/service",
            element: < Service/>
        
          },
         
      
      ],
    },
   
   
  ];
  
  export default routes;
  