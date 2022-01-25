import React, { useState } from "react";
import { View, Text } from "react-native";

import { Masks } from "react-native-mask-input";
import * as SecureStore from "expo-secure-store";

import Modal from "../Modal";
import Input from "../Input";
import Button from "../Button";
import TagError from "../TagError";

import { validateFormLead } from "../../utils/formLead";

import styles from "./styles";  

const FormLead = ({
  visible,
  submit,
  handleClose,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorField, setErrorField] = useState(false);

  const handleChangeName = (value) => setName(value);
  const handleChangeEmail = (value) => setEmail(value);
  const handleChangePhone = (_, unmaskedValue) => setPhone(unmaskedValue);

  const clearFields = () => {
    setName("");
    setEmail("");
    setPhone("");
    setErrorField(false);
  };

  const handleCloseForm = () => {
    clearFields();
    handleClose();
  }

  const submitForm = async () => {
    setErrorField(false);

    const values = { name, email, phone };
    const { success, message } = validateFormLead(values);

    if (!success) {
      setErrorField(message);
      return;
    }

    const deviceId = await SecureStore.getItemAsync("secure_deviceId");

    const payload = {
      name,
      email,
      phone,
      deviceId: JSON.parse(deviceId),
    };

    await submit(payload);
  }

  return (
    <Modal
      visible={visible}
      title="Não perca tempo!"
      handleClose={handleCloseForm}
    >
      <View style={styles.container}>
        <Text style={styles.description}>
          Inscreva-se na lista de espera da Turma X do nosso curso
          imersivo completo sobre Adolescência!
        </Text>

        <Input
          value={name}
          required={true}
          label="Nome Completo"
          onChange={handleChangeName}
          placeholder="Digite seu nome completo"
        />

        <Input
          value={email}
          required={true}
          label="E-mail"
          onChange={handleChangeEmail}
          type="email-address"
          placeholder="Digite seu e-mail principal"
        />

        <Input
          value={phone}
          mask={Masks.BRL_PHONE}
          required={true}
          label="Seu melhor número de contato"
          onChange={handleChangePhone}
          type="numeric"
          placeholder="(00) 00000-0000"
        />

        {errorField && (
          <TagError description={errorField} />
        )}

        <Button
          text="Inscrever-se"
          stylesText={styles.buttonSubscribe}
          handleOnPress={submitForm}
        />
      </View>
    </Modal>
  );
};

export default FormLead;
