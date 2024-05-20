import React, { useEffect, useState } from "react";
import style from "./admin.module.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../../redux/slices/adminSlice";

const Admin = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    axios.get("/products").then((response) => {
      setData(response.data);
    });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/products/${id}`);
      dispatch(deleteProduct(id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th className={style.table}>Image</th>
          <th className={style.table}>Name</th>
          <th className={style.table}>Description</th>
          <th className={style.table}>Price</th>
          <th className={style.table}>Delete</th>
          <th className={style.table}>Edit</th>
          <th className={style.table}>Update</th>
        </tr>
      </thead>
      <tbody>
        {data.map((elem) => (
          <tr key={elem.id} className={style.table}>
            <td className={style.table}>
              <img className={style.image} src={elem.image} alt="" />
            </td>
            <td className={style.table}>{elem.name}</td>
            <td className={style.table}>{elem.description}</td>
            <td className={style.table}>{elem.price}</td>
            <td className={style.table}>
              <button onClick={() => handleDelete(elem._id)}>Delete</button>
            </td>
            <td className={style.table}>
              <button>Edit</button>
            </td>
            <td className={style.table}>
              <button>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Admin;
