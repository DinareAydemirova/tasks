import axios from "axios";
import { BASE_URL } from "./api.js";

export const getAllData = async (BASE_URL) => {
  let res = await axios(BASE_URL);
  let data = res.data;
  return data;
};