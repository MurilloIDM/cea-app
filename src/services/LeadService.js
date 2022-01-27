import axios from "axios";

// TODO: Posteriormente o host deve ser armazenado em um .env
const BASE_URL = "http://192.168.100.196:8080/leads";

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

    await instance.request(config);
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export const findByDeviceId = async (deviceId) => {
  try {
    // TODO: Posteriormente a requisição para esse serviço dependerá de um token enviado no header.
    const config = {
      url: `/${deviceId}`,
      method: 'GET',
    };

    const { data } = await instance.request(config);

    return {
      isLead: data,
      sucess: true,
    }

  } catch (e) {
    console.error(e);
    throw e;
  }
}
