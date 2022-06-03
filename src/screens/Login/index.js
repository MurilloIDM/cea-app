import React, { useState } from "react";
import { Text, View, Image, KeyboardAvoidingView } from "react-native";

import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Button from "../../components/Button";
import FormLead from "../../components/FormLead";
import TagError from "../../components/TagError";
import LoaderLogin from "../../components/LoaderLogin";
import ModalLoader from "../../components/ModalLoader";

import { validateLogin } from "../../utils/login";

import logo from "../../../assets/images/logo.png";

import { saveLead } from "../../network/services/LeadService";
import { isStudent } from "../../network/services/StudentService";

import {
  ERROR_BAD_REQUEST_LEAD_EXIST,
  MESSAGE_LEAD_EXIST,
  MESSAGE_SUCCESS_SAVE_LEAD,
  NOT_STUDENT_BUT_LEAD, TITLE_LEAD_EXIST,
  TITLE_SUCESS_SAVE_LEAD
} from "../../constants/ConstantsLeads";

import {
  ERROR_GENERIC_MESSAGE,
  ERROR_GENERIC_TITLE,
  EXPIRED_ACCESS_MESSAGE,
  EXPIRED_ACCESS_TITLE
} from "../../constants/ConstantsStudent";

import styles from "./styles";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [errorField, setErrorField] = useState(false);
  const [messageModal, setMessageModal] = useState("");
  const [modalLoader, setModalLoader] = useState(false);
  const [errorFieldMessage, setErrorFieldMessage] = useState("");
  const [openModalLoading, setOpenModalLoading] = useState(false);
  const [openModalMessage, setOpenModalMessage] = useState(false);
  const [openModalRegisterLead, setOpenModalRegisterLead] = useState(false);

  const handleChangeEmail = (value) => setEmail(value);

  const clearFields = () => {
    setEmail("");
    setErrorField(false);
    setErrorFieldMessage("");
  };

  const timeForCloseModalLoading = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setOpenModalLoading(false);
        resolve();
      }, 3000);
    });
  }

  const handleOpenModalMessage = () => {
    setOpenModalMessage(false);
    setTitleModal("");
    setMessageModal("");

    if (!error) {
      navigation.navigate("Home", {});
    }
  }

  const handleSaveLead = async (payload) => {
    setModalLoader(true);
    try {
      await saveLead(payload);

      setTitleModal(TITLE_SUCESS_SAVE_LEAD);
      setMessageModal(MESSAGE_SUCCESS_SAVE_LEAD);
      setOpenModalRegisterLead(false);
      setOpenModalMessage(true);
    } catch (e) {
      const statusCode = e?.response?.data?.status;
      const messageError = e?.response?.data?.message;

      if (statusCode === 400 && messageError === ERROR_BAD_REQUEST_LEAD_EXIST) {
        setTitleModal(TITLE_LEAD_EXIST);
        setMessageModal(MESSAGE_LEAD_EXIST);
        setOpenModalRegisterLead(false);
        setOpenModalMessage(true);
      }
    } finally {
      setModalLoader(false);
    }
  }

  const submitForm = async () => {
    setErrorField(false);

    const values = { email };
    const { success, message } = validateLogin(values);

    if (!success) {
      clearFields();
      setErrorField(true);
      setErrorFieldMessage(message);
      return;
    }

    setOpenModalLoading(true);
    try {
      const { active, lead, primaryAccess, student } = await isStudent(email);

      await timeForCloseModalLoading();

      if (student && active && primaryAccess) {
        return navigation.navigate("RegisterPassword", {
          email,
          token: null,
          isEditPassword: false,
        });
      }

      if (student && active) {
        return navigation.navigate("InDbWithPass", { email });
        return;
      }

      if (student && !active) {
        setOpenModalMessage(true);
        setTitleModal(EXPIRED_ACCESS_TITLE);
        setMessageModal(EXPIRED_ACCESS_MESSAGE);
        return;
      }

      if (lead) {
        setOpenModalMessage(true);
        setTitleModal(NOT_STUDENT_BUT_LEAD);
        setMessageModal(MESSAGE_LEAD_EXIST);
        return;
      }

      setOpenModalRegisterLead(true);
    } catch (e) {
      setOpenModalLoading(false);
      setTitleModal(ERROR_GENERIC_TITLE);
      setMessageModal(ERROR_GENERIC_MESSAGE);
      setError(true);
      setOpenModalMessage(true);
    }
  }

  return (
    <KeyboardAvoidingView behavior="height">
      <View style={styles.container}>
        <View>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={logo}
          />
        </View>

        <View>
          <Text style={styles.title}>
            Seja bem vindo à nossa comunidade!
          </Text>

          <Text style={styles.description}>
            Digite seu e-mail para começar.
          </Text>
        </View>

        <View style={styles.form}>
          <Input
            value={email}
            required={false}
            onChange={handleChangeEmail}
            type="email-address"
            placeholder="pessoa@gmail.com"

          />

          {errorField && (
            <TagError description={errorFieldMessage} />
          )}

          <Button
            text="Próximo"
            stylesText={styles.buttonSubscribe}
            handleOnPress={submitForm}
          />
        </View>
      </View>

      <LoaderLogin
        visible={openModalLoading}
      />

      <ModalLoader
        visible={modalLoader}
        handleClose={() => setModalLoader(false)}
      />

      <Modal
        visible={openModalMessage}
        handleClose={handleOpenModalMessage}
        title={titleModal}
      >
        <Text style={styles.textMessage}>
          {messageModal}
        </Text>

        <Button
          text="Ok"
          stylesText={styles.buttonClose}
          handleOnPress={handleOpenModalMessage}
        />
      </Modal>

      <FormLead
        isNotStudent={true}
        submit={handleSaveLead}
        visible={openModalRegisterLead}
        handleClose={() => setOpenModalRegisterLead(false)}
      />
    </KeyboardAvoidingView>
  );
};

export default Login;