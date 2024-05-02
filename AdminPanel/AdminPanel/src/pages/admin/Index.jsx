/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
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
          <th>City</th>
          <th>Region</th>

        </tr>
      </thead>
      <tbody>
        {data.map((elem) => {
          return (
            <tr>
              <td>{elem.companyName}</td>
              <td>{elem.contactName}</td>
              {/* <td>{elem.address.street}</td>*/}

            


            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Admin;
