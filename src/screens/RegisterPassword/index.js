import React, { useState } from "react";
import { View, Text, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native";

import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TagError from "../../components/TagError";
import ModalLoader from "../../components/ModalLoader";

import { Ionicons } from "@expo/vector-icons";
import logo from "../../../assets/images/logo.png";

import { validateRegisterPassword } from "../../utils/RegisterPassword";

import { createPassword, updatePassword } from "../../network/services/StudentService";

import {
  ERROR_GENERIC_MESSAGE,
  ERROR_GENERIC_TITLE, SUCCESS_CREATE_UPDATE_PASSWORD_MESSAGE,
  SUCCESS_CREATE_UPDATE_PASSWORD_TITLE
} from "../../constants/ConstantsStudent";

import styles from "./styles";

const RegisterPassword = ({ navigation, route }) => {
  const { email, isEditPassword, token } = route.params;

  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenRepeatedPassword, setHiddenRepeatedPassword] = useState(true);

  const [error, setError] = useState(false);
  const [errorField, setErrorField] = useState(false);
  const [messageError, setMessageError] = useState("");

  const [loading, setLoading] = useState(false);

  const [titleModal, setTitleModal] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [messageModal, setMessageModal] = useState("");

  const handlePassword = (value, field) => {
    setMessageError("");
    setErrorField(false);

    if (field === "password") {
      setPassword(value);
      return;
    }

    setRepeatedPassword(value);
  };

  const clearFields = (clearInputs) => {
    setMessageError("");
    setErrorField(false);
    setHiddenPassword(true);
    setHiddenRepeatedPassword(true);

    if (clearInputs) {
      setPassword("");
      setRepeatedPassword("");
    }
  }

  const handleCloseModalError = () => {
    setOpenModal(false);
    clearFields(false);
  }

  const handleCloseModalSuccess = async () => {
    clearFields();
    setOpenModal(false);
    navigation.popToTop();
  }

  const submitForm = async () => {
    setErrorField(false);

    const values = { password, repeatedPassword };
    const { success, message, clearInputs } = validateRegisterPassword(values);

    if (!success) {
      clearFields(clearInputs);
      setErrorField(true);
      setMessageError(message);
      return;
    }

    const payload = { email, password };
    if (isEditPassword) payload.token = token;

    setLoading(true);
    try {
      const operation = isEditPassword ? updatePassword : createPassword;
      await operation(payload);

      if (!isEditPassword) {
        setTitleModal(SUCCESS_CREATE_UPDATE_PASSWORD_TITLE);
        setMessageModal(SUCCESS_CREATE_UPDATE_PASSWORD_MESSAGE);
        setOpenModal(true);
      } else {
        navigation.popToTop();
      }

    } catch (e) {
      setError(true);
      setTitleModal(ERROR_GENERIC_TITLE);
      setMessageModal(ERROR_GENERIC_MESSAGE);
      setOpenModal(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView behavior="height">
      <View style={styles.container}>
        <View>
          <Image
            source={logo}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.description}>
            Por favor, cadastre uma senha.
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputPassword}>
            <Input
              label="Senha"
              type="default"
              maxLength={18}
              value={password}
              required={false}
              blurOnSubmit={true}
              keybordType="default"
              onChange={(value) => handlePassword(value, "password")}
              placeholder="Insira sua senha"
              secureTextEntry={hiddenPassword}
            />

            <TouchableOpacity
              style={styles.icon}
              onPress={() => setHiddenPassword(!hiddenPassword)}
            >
              {
                hiddenPassword
                  ? <Ionicons name="eye-off" color="#000" size={25} />
                  : <Ionicons name="eye" color="#000" size={25} />
              }
            </TouchableOpacity>
          </View>

          <View style={styles.inputPassword}>
            <Input
              label="Digite a senha novamente"
              type="default"
              maxLength={18}
              required={false}
              blurOnSubmit={true}
              keybordType="default"
              value={repeatedPassword}
              onChange={(value) => handlePassword(value, "repeatedPassword")}
              secureTextEntry={hiddenRepeatedPassword}
              placeholder="Insira sua senha novamente"
            />

            <TouchableOpacity
              style={styles.icon}
              onPress={() => setHiddenRepeatedPassword(!hiddenRepeatedPassword)}
            >
              {
                hiddenRepeatedPassword
                  ? <Ionicons name="eye-off" color="#000" size={25} />
                  : <Ionicons name="eye" color="#000" size={25} />
              }
            </TouchableOpacity>

            {errorField && (
              <TagError description={messageError} />
            )}
          </View>

          <Button
            text="Cadastrar senha"
            handleOnPress={submitForm}
            stylesText={styles.button}
          />
        </View>
      </View>

      <ModalLoader
        visible={loading}
      />

      <Modal
        title={titleModal}
        visible={openModal}
        handleClose={error ? handleCloseModalError : handleCloseModalSuccess}
      >
        <Text style={styles.messageModal}>
          {messageModal}
        </Text>

        <Button
          text="Ok"
          stylesText={styles.buttonModal}
          handleOnPress={error ? handleCloseModalError : handleCloseModalSuccess}
        />
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default RegisterPassword;