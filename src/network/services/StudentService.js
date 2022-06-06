import { instanceBasic } from "../config/instanceBasic";

export const isStudent = async (email) => {
  const config = {
    method: "GET",
    url: `/students/isStudent?email=${email}`,
  };

  const { data } = await instanceBasic.request(config);

  return { ...data };
};

export const createPassword = async (payload) => {
  const config = {
    method: "POST",
    data: payload,
    url: "/students/password/create",
  };

  await instanceBasic.request(config);
};

export const updatePassword = async (payload) => {
  const config = {
    method: "PATCH",
    data: payload,
    url: "/students/password/update",
  };

  await instanceBasic.request(config);
};

export const authStudent = async (payload) => {
  const config = {
    method: "POST",
    data: payload,
    url: "/app/login",
  };

  const { data } = await instanceBasic.request(config);

  return data?.accessToken;
}

export const mailForgotPassword = async (email) => {
  const config = {
    method: "POST",
    url: `/students/password/forgot?email=${email}`,
  };

  await instanceBasic.request(config);
}

export const validateTokenForResetPassword = async (payload) => {
  const config = {
    method: "POST",
    data: payload,
    url: "/students/password/reset/validate-token",
  };

  await instanceBasic.request(config);
}