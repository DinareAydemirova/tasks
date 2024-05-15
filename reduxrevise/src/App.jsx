/** @format */

import { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "./services/Index";
import { BASE_URL } from "./services/api";
import { getDatas, addData } from "./redux/slicers/slices";
import { addToFav } from "./redux/slicers/favSlices";

function App() {
  const [inpValue, setinpValue] = useState("")
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.users);
  const { fav } = useSelector((store) => store.fav);
  // console.log(fav);

  // console.log(users);
  useEffect(() => {
    getAllData(BASE_URL).then((data) => {
      dispatch(getDatas(data));
      // console.log(data);
    });
  }, []);

  return (
    <>
    <input type="text" name="" id="" onChange={(e)=>{
      setinpValue(inpValue)

    }}/>
    <button onClick={()=>  dispatch(addData({id:Math.random(),title:inpValue}))
    }>add</button>
    <div style={{ display: "flex" }}>
    
      <div>
        {users?.map((elem) => {
          return (
            <ul>
              <li>
                {elem.title}
                <button
                  onClick={() => {
                    dispatch(addToFav(elem));
                  }}
                >
                  Add to fav
                </button>
              </li>
            </ul>
          );
        })}
      </div>
      <h2>Favorites</h2>
      <ul>
        {fav?.map((elem) => {
          return (
            <li>
              {elem.title}
              <button onClick={() => dispatch(addToFav(elem))}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
    </>
  );
}

export default App;
