import * as SecureStore from "expo-secure-store";
import moment from "moment";

export async function getStudentId() {
  const jsonPersistent = await SecureStore.getItemAsync("user");
  const user = JSON.parse(jsonPersistent);

  const studentId = user?.studentId;
  return studentId;
}

export async function studentTokenIsValid() {
  const jsonPersistent = await SecureStore.getItemAsync("user");
  const user = JSON.parse(jsonPersistent);

  const dateNow = moment();
  return dateNow.isAfter(user?.expiresAt);
}