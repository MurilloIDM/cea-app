import { createContext, useState } from "react";
import moment from "moment";
import * as SecureStore from "expo-secure-store";

import { authStudent } from "../network/services/StudentService";
import { instancePrivate } from "../network/config/instancePrivate";

import { ERROR_AUTH_LOGIN, ERROR_GENERIC_MESSAGE, TOKEN_DURATION_HOUR } from "../constants/ConstantsStudent";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  const validateSession = async () => {
    const jsonPersistent = await SecureStore.getItemAsync("user");
    const user = JSON.parse(jsonPersistent);

    if (user) {
      const { token, expiresAt } = user;

      const dateNow = moment();
      const accessExpired = dateNow.isAfter(expiresAt);

      if (accessExpired) {
        await handleLogout();
        return;
      }

      if (token) {
        instancePrivate.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);
        return;
      }
    }

    await handleLogout();
    return;
  }

  const handleLogin = async (payload) => {
    try {
      setError(false);
      setLoading(true);

      const accessToken = await authStudent(payload);

      const persistData = {
        token: accessToken,
        email: payload?.email,
        expiresAt: moment().add(TOKEN_DURATION_HOUR, "hours"),
      };

      await SecureStore.setItemAsync("user", JSON.stringify(persistData));
    } catch (e) {
      let message = ERROR_GENERIC_MESSAGE;
      const status = e?.response?.data?.status;

      if (status === 401) {
        message = ERROR_AUTH_LOGIN;
      }

      setMessageError(message);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const handleLogout = async () => {
    await SecureStore.deleteItemAsync("user");
    instancePrivate.defaults.headers.Authorization = undefined;
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{
      error,
      loading,
      setError,
      handleLogin,
      handleLogout,
      messageError,
      authenticated,
      validateSession,
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export {
  AuthProvider,
  AuthContext,
};