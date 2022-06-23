import React, { useRef, useState, useEffect } from "react";
import OTPTextInput from "react-native-otp-textinput";
import { Text, View, Image, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Pressable } from "react-native";

import Modal from "../../components/Modal";
import Button from "../../components/Button";
import TagError from "../../components/TagError";
import ModalLoader from "../../components/ModalLoader";

import { validateOTP, hideEmail } from "../../utils/passRecovery";
import {
  ERROR_GENERIC_TITLE,
  ERROR_SEND_MAIL_FORGOT_PASSWORD,
  ERROR_VALIDATE_TOKEN_PASSWORD,
  SUCCESS_RESEND_TOKEN_MESSAGE,
  SUCCESS_RESEND_TOKEN_TITLE
} from "../../constants/ConstantsStudent";

import logo from "../../../assets/images/logo.png";

import { mailForgotPassword, validateTokenForResetPassword } from "../../network/services/StudentService";

import styles from "./styles";

const PassRecovery = ({ navigation, route }) => {
  const { email } = route.params;

  const otpRef = useRef(null);

  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorField, setErrorField] = useState(false);
  const [messageError, setMessageError] = useState("");
  const [messageSuccess, setMessageSuccess] = useState("");
  const [errorFieldMessage, setErrorFieldMessage] = useState("");
  const [modalConfirmation, setModalConfirmation] = useState(true);

  const handleChangeCode = (value) => setCode(value);

  const handleCloseModal = () => {
    setCode("");
    setError(false);
    setMessageError("");
    otpRef.current.clear();
  }

  const toBackScreen = () => {
    setModalConfirmation(false);
    navigation.goBack();
  }

  const handleReSendOtp = async () => {
    Keyboard.dismiss();

    setModalConfirmation(false);
    setLoading(true);
    try {
      await mailForgotPassword(email);

      setMessageSuccess(SUCCESS_RESEND_TOKEN_MESSAGE);
      setSuccess(true);
    } catch (e) {
      setMessageError(ERROR_SEND_MAIL_FORGOT_PASSWORD);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  const submitForm = async () => {
    Keyboard.dismiss();
    setErrorField(false);
    const { success, message } = validateOTP(code);

    if (!success) {
      setErrorField(true);
      setErrorFieldMessage(message);
      return;
    }

    const payload = { email, token: code };

    setLoading(true);
    try {
      await validateTokenForResetPassword(payload);
      setLoading(false);

      navigation.navigate("RegisterPassword", {
        email,
        token: code,
        isEditPassword: true,
      });
    } catch (e) {
      const message = e?.response?.data?.message || ERROR_VALIDATE_TOKEN_PASSWORD;
      setLoading(false);
      setMessageError(message);
      setError(true);
    }
  }

  return (
    <>
      <KeyboardAvoidingView behavior="position" >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container} onPress={Keyboard.dismiss}>
            <View>
              <Image
                resizeMode="contain"
                style={styles.logo}
                source={logo}
              />
            </View>

            <View>
              <Text style={styles.title}>
                Recuperação de senha
              </Text>
              <Text style={styles.description}>
                Enviamos um código para:
              </Text>
              <Text style={styles.email}>
                {hideEmail(email)}
              </Text>
              <Text style={styles.description}>
                Caso não tenha recebido em sua caixa de entrada verifique em sua caixa de spam.
              </Text>
              <Text style={styles.description}>
                Insira abaixo o código recebido:
              </Text>
            </View>

            <View style={styles.form}>

              <OTPTextInput
                handleTextChange={handleChangeCode}
                containerStyle={styles.otpContainer}
                textInputStyle={styles.otpInput}
                offTintColor={'white'}
                tintColor={'white'}
                keyboardType={'numeric'}
                autoFocus={false}
                inputCount={6}
                ref={otpRef}
              />

              {errorField && (
                <TagError
                  description={errorFieldMessage}
                  stylesContainer={styles.tagError}
                />
              )}

              <Pressable
                style={styles.reSend}
                onPress={handleReSendOtp}
              >
                <Text style={styles.reSendText}>
                  Não recebeu? Clique aqui para reenviar.
                </Text>
              </Pressable>

              <Button
                text="Próximo"
                stylesButton={styles.buttonSubmit}
                stylesText={styles.buttonSubmitText}
                handleOnPress={submitForm}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>

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

      <Modal
        visible={success}
        title={SUCCESS_RESEND_TOKEN_TITLE}
        handleClose={() => setSuccess(false)}
      >
        <Text style={styles.textMessage}>
          {messageSuccess}
        </Text>

        <Button
          text="Ok"
          stylesText={styles.buttonClose}
          handleOnPress={() => setSuccess(false)}
        />
      </Modal>

      <Modal
        visible={modalConfirmation}
        title="Enviar e-mail de recuperação"
        handleClose={toBackScreen}
      >
        <Text style={styles.textMessage}>
          Para enviar o e-mail, clique em "enviar." Se desejar cancelar a operação, clique em "cancelar".
        </Text>

        <Button
          text="Cancelar"
          handleOnPress={toBackScreen}
          stylesButton={styles.buttonCancel}
          stylesText={styles.buttonCancelText}
        />

        <Button
          text="Enviar"
          stylesText={styles.buttonClose}
          handleOnPress={handleReSendOtp}
        />
      </Modal>

      <ModalLoader  visible={loading} />
    </>
  );
};

export default PassRecovery;