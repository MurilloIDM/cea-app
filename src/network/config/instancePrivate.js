import axios from "axios";
import { BASE_URL } from "@env";

const instancePrivate = axios.create({
  baseURL: BASE_URL,
});

export { instancePrivate };
