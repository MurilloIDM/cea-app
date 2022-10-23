import axios from "axios";
import { BASE_URL, SECRET_KEY_PUBLIC_API } from "@env";

const instanceBasic = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Basic ${SECRET_KEY_PUBLIC_API}`
  }
});

export { instanceBasic };
