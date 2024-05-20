import React, { useEffect, useState } from "react";
import style from "./cards.module.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setBasket } from "../../../../redux/slices/basketSlice";

const Cards = () => {
  const dispatch=useDispatch()
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/products").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.toptexts}>
        <p>POPULAR PRODUCTS</p>
        <h2>Our Products</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
          consequatur laboriosam ipsam.
        </p>
      </div>
      <div className={style.products}>
        {data.map((prods) => (
          <div key={prods.id} className={style.productCard}>
            
            <img className={style.image} src={prods.image} alt={prods.name} />
            <p>{prods.name}</p>
            <p>{prods.description}</p>
            <p>{prods.price}</p>
            <button className={style.addcart} onClick={() => dispatch(setBasket(prods))}>Add to card</button>
            <button className={style.view}>View</button>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
