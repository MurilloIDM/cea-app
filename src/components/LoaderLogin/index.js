import React from 'react';
import { Text, View, Image, Modal } from "react-native";
import * as Animatable from "react-native-animatable";

import logo from "../../../assets/images/logo.png";

import styles from "./styles";

const AnimatedImage = Animatable.createAnimatableComponent(Image);

const LoaderLogin = ({ visible, handleClose }) => {

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={handleClose}
    >
      <View style={styles.container}>
        <View>

          <AnimatedImage
            resizeMode="contain"
            source={logo}
            style={styles.loaderImg}
            animation="pulse"
            useNativeDriver
            iterationCount={Infinity}

          />
        </View>

        <View>
          <Text style={styles.description}>Por favor, aguarde um momento.</Text>
          <Text style={styles.description}>Estamos verificando seu email...</Text>
        </View>

      </View>
    </Modal>
  );
};

export default LoaderLogin;
