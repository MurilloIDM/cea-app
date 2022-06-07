import React, { useContext, useState } from "react";
import { Image, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import logoMain from "../../../assets/images/logoMain.png";

import Modal from "../../components/Modal";
import Button from "../../components/Button";
import MenuConfig from "../../components/MenuConfig";
import ExclusivePostListing from "../../components/ExclusivePostListing";

import { AuthContext } from "../../context/AuthProvider";

import { EXPIRED_ACCESS_MESSAGE, EXPIRED_ACCESS_TITLE } from "../../constants/ConstantsStudent";

import styles from "./styles";
import { ERROR_GENERIC_TITLE } from "../../constants/ConstantsExclusivePost";

const ExclusivePost = ({ navigation }) => {
  const { handleLogout } = useContext(AuthContext);

  const [menuVisible, setMenuVisible] = useState(false);
  const [modalAccessExpired, setModalAccessExpired] = useState(false);
  const [errorGeneric, setErrorGeneric] = useState({ error: false, message: "" });

  const closeModalAccessExpired = async () => {
    setModalAccessExpired(false);
    await handleLogout();
  }

  const closeModalErrorGeneric = () => {
    setErrorGeneric({ error: false, message: "" });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerIn}>
        <View style={styles.header}>
          <Image
            source={logoMain}
            resizeMode="contain"
            style={styles.logoMain}
          />
          <Feather
            name="menu"
            size={40}
            color="black"
            onPress={() => setMenuVisible(true)}
          />
        </View>

        <ExclusivePostListing
          setErrorGeneric={setErrorGeneric}
          handleAccessExpired={setModalAccessExpired}
          handlePressComments={(post) => navigation.navigate("Comments", { exclusivePost: post })}
        />

        <MenuConfig
          visible={menuVisible}
          navigation={navigation}
          handleClose={() => setMenuVisible(false)}
        />

        <Modal
          visible={modalAccessExpired}
          title={EXPIRED_ACCESS_TITLE}
          handleClose={closeModalAccessExpired}
        >
          <Text style={styles.textMessageModal}>
            {EXPIRED_ACCESS_MESSAGE}
          </Text>

          <Button
            text="Ok"
            stylesText={styles.buttonCloseModal}
            handleOnPress={closeModalAccessExpired}
          />
        </Modal>

        <Modal
          title={ERROR_GENERIC_TITLE}
          visible={errorGeneric?.error}
          handleClose={closeModalErrorGeneric}
        >
          <Text style={styles.textMessageModal}>
            {errorGeneric?.message}
          </Text>

          <Button
            text="Ok"
            stylesText={styles.buttonCloseModal}
            handleOnPress={closeModalErrorGeneric}
          />
        </Modal>
      </View>
    </SafeAreaView>
  );
}

export default ExclusivePost;