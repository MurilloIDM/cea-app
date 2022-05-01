import React, { useState } from "react";
import { Text, View, Image, KeyboardAvoidingView} from 'react-native';

import Input from "../../components/Input";
import Button from "../../components/Button";
import TagError from "../../components/TagError";

import { validateLogin } from "../../utils/login";

import logo from "../../../assets/images/logo.png";

import styles from "./styles";

const Login = ({}) => {

    const [email, setEmail] = useState("");
    const [errorField, setErrorField] = useState(false);

    const handleChangeEmail = (value) => setEmail(value);

    const clearFields = () => {
        setEmail("");
        setErrorField(false);
    };
    
    const submitForm = async () => {
        setErrorField(false);

        const values = { email };
        const { success, message } = validateLogin(values);
        
        if (!success) {

            clearFields();
            setErrorField(message);
            return;
        }

        const payload = {
            email,
        };
        
        console.log(payload);
    }
        
    return(
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
                        <TagError description={errorField} />
                    )}

                    <Button
                        text="Próximo"
                        stylesText={styles.buttonSubscribe}
                        handleOnPress={submitForm}
                    />
                </View>
            </View>
            
        </KeyboardAvoidingView>
    );

};

export default Login;