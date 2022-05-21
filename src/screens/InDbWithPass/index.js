import React, { useState } from "react";
import { Text, View, Image, KeyboardAvoidingView, TouchableOpacity} from 'react-native';
import { AntDesign } from "@expo/vector-icons";

import Input from "../../components/Input";
import Button from "../../components/Button";
import TagError from "../../components/TagError";
{/*import PassRecovery from "../PassRecovery";*/}

import { validatePassword } from "../../utils/password";

import logo from "../../../assets/images/logo.png";

import styles from "./styles";

const InDbWithPass = ({ navigation }) => {

    const email = "cris@gmail.com";
    
    const [password, setPassword] = useState("");
    const [errorField, setErrorField] = useState(false);
    const [hidePass, setHidePass] = useState(true)

    const handleChangePassword = (value) => setPassword(value);

    const clearFields = () => {
        setPassword("");
        setErrorField(false);
    };
    
    const submitForm = async () => {
        setErrorField(false);

        const values = { password };
        const { success, message } = validatePassword(values);
        console.log(password);
        
        if (!success) {

            clearFields();
            setErrorField(message);
            return;
        }

    };

    const forgotPassword = () => {
        navigation.navigate("Home", {}); //substituir Home por PassRecovery
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

                    <Text style={styles.description}>
                        Agora digite sua senha.
                    </Text>
                </View>

                <View>
                    <View style={styles.emailChecked}>
                        <Text>
                            E-mail 
                        </Text> 
                        
                        <Text style={styles.personalEmail}>
                            {email} 
                        </Text>
                    </View>
                </View>

                <View>

                    <Text style={styles.labelPass}>
                        Senha
                    </Text>

                    <View style={styles.form}>
                        <View style={styles.input}>
                        <Input
                            value={password}
                            required={false}
                            onChange={handleChangePassword}
                            type="default"
                            blurOnSubmit={true}
                            keybordType="default"
                            placeholder={"Insira sua senha"}
                            maxLength={8}
                            //secureTextEntry={"true"} VERIFICAR COMO INSERIR
                                            
                        />
                        </View>

                        <AntDesign
                            size={32}
                            name="eyeo"
                            style={styles.eyeo}
                        />

                        <View >
                            <TouchableOpacity onPress={forgotPassword}>     
                                <Text style={styles.forgot}>
                                    Esqueceu sua senha?
                                </Text>
                            </TouchableOpacity>   
                        </View>
                        
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
            </View>
            
        </KeyboardAvoidingView>
    );

};

export default InDbWithPass;