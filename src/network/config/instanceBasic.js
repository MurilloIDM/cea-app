import axios from "axios";
import { BASE_URL } from "@env";

const instanceBasic = axios.create({
  baseURL: BASE_URL,
});

export { instanceBasic };
