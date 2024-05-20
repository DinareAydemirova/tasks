/** @format */

import React, { createContext, useContext, useState } from "react";
import { getAllData } from "../services";

const AppContext = createContext();
export const useAppContext = useContext(AppContext);

const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllData(endPoints.products).then((data) => {
      setProducts(data);
      // console.log(state.products);
    });
  }, []);

  return (
    <AppContext.Provider value={{ products, setProducts }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
