import { useState } from "react";
import { Text, View, Image, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, Pressable } from "react-native";
import OTPTextInput from 'react-native-otp-textinput';

import Input from "../../components/Input";
import Button from "../../components/Button";
import TagError from "../../components/TagError";

import { validateOTP, hideEmail } from "../../utils/passRecovery";

import logo from "../../../assets/images/logo.png";

import styles from "./styles";

const PassRecovery = ({ navigation, data }) => {

  const email = "pessoa@mail.com";

  const [code, setCode] = useState('');
  const [errorField, setErrorField] = useState(false);
  const [errorFieldMessage, setErrorFieldMessage] = useState("");

  const handleChangeCode = (value) => setCode(value);

  const handleReSendOtp = () => {
    Keyboard.dismiss();
    console.log('Reenviar código')
  }

  const submitForm = () => {
    Keyboard.dismiss();
    const { success, message } = validateOTP(code);
    if (!success) {
      setErrorField(true)
      setErrorFieldMessage(message)
    }
    else {
      setErrorField(false)
      console.log('Enviar o código: ', code)
    }
  }

  return (
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
  );
};

export default PassRecovery;