import React, { useState } from "react";
import { Text, View, Image, KeyboardAvoidingView } from "react-native";

import Input from "../../components/Input";
import Button from "../../components/Button";
import TagError from "../../components/TagError";

import logo from "../../../assets/images/logo.png";

import styles from "./styles";

const PassRecovery = ({ navigation, data }) => {

  const email = "pessoa@mail.com";

  const [code, setCode] = useState('');

  const handleChangeCode = (value) => setCode(value);

  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
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
            Recuperação de senha
          </Text>

          <Text style={styles.description}>
            Enviamos um código para:
          </Text>

          <Text style={styles.email}>
            {email}
          </Text>

          <Text style={styles.description}>
            Caso não tenha recebido em sua caixa de entrada verifique em sua caixa de spam.
          </Text>
          <Text style={styles.description}>
            Insira abaixo o código recebido em seu e-mail:
          </Text>

        </View>

        <View style={styles.form}>
          <Input
            value={code}
            required={false}
            onChange={handleChangeCode}
            placeholder="- - - -"

          />

          {/* {errorField && (
            <TagError description={errorFieldMessage} />
          )} */}

          {/* <Button
            text="Próximo"
            stylesText={styles.buttonSubscribe}
            handleOnPress={submitForm}
          /> */}
        </View>
      </View>

    </KeyboardAvoidingView>
  );
};

export default PassRecovery;