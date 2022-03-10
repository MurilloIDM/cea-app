import axios from "axios";

// TODO: Posteriormente o host deve ser armazenado em um .env
const BASE_URL = "https://cea-back.herokuapp.com/freeposts";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const listAllFreePost = async () =>  {
  try {
    // TODO: Posteriormente a requisição para esse serviço dependerá de um token enviado no header.
    const config = {
      url: "/all",
      method: "GET",
    };

    const { data } = await instance.request(config);

    return {
      data,
      sucess: true
    };
  } catch (e) {
    console.error(e);
    throw e;
  }
}
