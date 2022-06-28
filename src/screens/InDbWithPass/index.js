import React, { useState, useContext } from "react";
import { Text, View, Image, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { AuthContext } from "../../context/AuthProvider";

import Input from "../../components/Input";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import TagError from "../../components/TagError";
import ModalLoader from "../../components/ModalLoader";

import { validatePassword } from "../../utils/password";
import { ERROR_GENERIC_TITLE, ERROR_SEND_MAIL_FORGOT_PASSWORD } from "../../constants/ConstantsStudent";

import logo from "../../../assets/images/logo.png";

import styles from "./styles";

const InDbWithPass = ({ navigation, route }) => {
  const { email } = route.params;
  const { handleLogin, validateSession, loading, error, setError, messageError } = useContext(AuthContext);

  const [password, setPassword] = useState("");
  const [hidePass, setHidePass] = useState(true);
  const [errorField, setErrorField] = useState("");

  const handleChangePassword = (value) => setPassword(value);

  const handleCloseModal = () => {
    setError(false);
    setHidePass(true);
  }

  const clearFields = () => {
    setPassword("");
    setErrorField("");
  };

  const submitForm = async () => {
    setErrorField("");

    const values = { password };
    const { success, message } = validatePassword(values);

    if (!success) {
      clearFields();
      setErrorField(message);
      return;
    }

    const payload = { email, password };

    await handleLogin(payload);
    await validateSession();
  };

  const forgotPassword = () => {
    navigation.navigate("PassRecovery", { email });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container}>
        <View>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={logo}
          />
        </View>

        <View>
          <Text style={styles.description}>
            Agora digite sua senha.
          </Text>
        </View>

        <View>
          <View>
            <Text style={styles.emailChecked}>
              E-mail
            </Text>

            <Text numberOfLines={1} style={styles.personalEmail}>
              {email}
            </Text>
          </View>
        </View>

        <View>

          <View style={styles.form}>
            <View style={styles.container2}>
              <Input
                label={"Senha"}
                value={password}
                required={false}
                onChange={handleChangePassword}
                type="default"
                blurOnSubmit={true}
                keybordType="default"
                placeholder={"Insira sua senha"}
                maxLength={18}
                secureTextEntry={hidePass}
              />

              {(errorField !== "") && (
                <TagError description={errorField} />
              )}

              <TouchableOpacity style={styles.icon} onPress={() => setHidePass(!hidePass)}>

                {hidePass ?
                  <Ionicons name="eye-off" color="#000000" size={25} />
                  :
                  <Ionicons name="eye" color="#000000" size={25} />
                }
              </TouchableOpacity>
            </View>
            <View style={styles.containerForgot}>
              <TouchableOpacity onPress={forgotPassword}>
                <Text style={styles.forgot}>
                  Esqueceu sua senha?
                </Text>
              </TouchableOpacity>
            </View>


            <Button
              text="Próximo"
              stylesText={styles.buttonSubscribe}
              handleOnPress={submitForm}
            />

          </View>
        </View>


        {error && (
          <Modal
            visible={error}
            title={ERROR_GENERIC_TITLE}
            handleClose={handleCloseModal}
          >
            <Text style={styles.textMessage}>
              {messageError}
            </Text>

            <Button
              text="Fechar"
              stylesText={styles.buttonClose}
              handleOnPress={handleCloseModal}
            />
          </Modal>
        )}

        <ModalLoader visible={loading} />

      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );

};

export default InDbWithPass;