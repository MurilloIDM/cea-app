import { instanceBasic } from "../config/instanceBasic";

export const saveLead = async (payload) => {
  const config = {
    url: '/leads/',
    method: 'POST',
    data: payload,
  };

  await instanceBasic.request(config);
}

export const findByDeviceId = async (deviceId) => {
  const config = {
    url: `/leads/${deviceId}`,
    method: 'GET',
  };

  const { data } = await instanceBasic.request(config);

  return {
    isLead: data
  };
}
