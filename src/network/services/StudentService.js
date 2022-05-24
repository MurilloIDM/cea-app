import { instanceBasic } from "../config/instanceBasic";

export const isStudent = async (email) => {
  const config = {
    method: "GET",
    url: `/students/isStudent?email=${email}`,
  };

  const { data } = await instanceBasic.request(config);

  return { ...data };
}