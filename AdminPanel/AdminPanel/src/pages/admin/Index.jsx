/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";
const Admin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("https://northwind.vercel.app/api/suppliers").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Company Name</th>
          <th>Contact Name</th>
          <th> city </th>
          <th> region </th>

          <th>Delete</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((elem) => {
          return (
            <tr>
              <td>{elem.companyName}</td>
              <td>{elem.contactName}</td>
              <td>{elem.address.city}</td>
              <td>{elem.address.region}</td>

              <td>
                <button
                  className="delbtn"
                  onClick={() => {
                    const newData = data.filter((e) => e.id !== elem.id);
                    setData(newData);
                    axios.delete(
                      `https://northwind.vercel.app/api/suppliers/${elem.id}`
                    );
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button className="editbtn">Edit</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Admin;
