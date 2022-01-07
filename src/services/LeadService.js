import axios from "axios";

// TODO: Posteriormente o host deve ser armazenado em um .env
const BASE_URL = "http://localhost:8080/leads";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const saveLead = async (payload) => {
  try {
    // TODO: Posteriormente a requisição para esse serviço dependerá de um token enviado no header.
    const config = {
      url: '/',
      method: 'POST',
      data: payload,
    };

    const { data } = await instance.request(config);

    return {
      data,
      sucess: true,
      message: "Successful request",
    };
  } catch (e) {
    // TODO: Posteriormente o erro deve ser tratado e retornado (retornar status + mensagem)
    console.error(e);
  }
}
