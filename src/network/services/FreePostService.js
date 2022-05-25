import { instanceBasic } from "../config/instanceBasic";

export const listAllFreePost = async () => {
  const config = {
    url: "/free-posts/all",
    method: "GET",
  };

  const { data } = await instanceBasic.request(config);

  return {
    data,
    success: true
  };
}
