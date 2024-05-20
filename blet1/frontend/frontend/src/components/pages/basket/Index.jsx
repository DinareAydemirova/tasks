import React from "react";
import style from "./basket.module.scss";
import { useSelector } from "react-redux";

const Basket = () => {
  const basket = useSelector((state) => state.basket);

  return (
    <div className={style.container}>
      <div className={style.products}>
        {basket?.map((elem) => (
            <div key={elem._id} className={style.productCard}>
              <img className={style.image} src={elem.image} alt={elem.name} />
              <p>{elem.name}</p>
              <p>{elem.description}</p>
              <p>{elem.price}</p>
              <p>Quantity: {elem.count}</p>
              <button className={style.addcart}>Add to cart</button>
              <button className={style.view}>View</button>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Basket;
