import React, { useState, useEffect } from "react";
import { View, ScrollView, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import * as SecureStore from "expo-secure-store";
import { SafeAreaView } from "react-native-safe-area-context";

import Modal from "../../components/Modal";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import FormLead from "../../components/FormLead";
import TitlePage from "../../components/TitlePage";
import ModalLoader from "../../components/ModalLoader";

import { saveLead } from "../../network/services/LeadService";
import { findByDeviceId } from "../../network/services/LeadService";
import { listAllFreePost } from "../../network/services/FreePostService";

import styles from "./styles";

import {
  TITLE_SUCESS_SAVE_LEAD,
  MESSAGE_SUCCESS_SAVE_LEAD,
  TITLE_LEAD_EXIST,
  MESSAGE_LEAD_EXIST,
  ERROR_BAD_REQUEST_LEAD_EXIST,
  ERROR_GENERIC_DEVICE_ID_MESSAGE,
  ERROR_GENERIC_DEVICE_ID_TITLE,
} from "../../constants/ConstantsLeads";

const FreePost = ({ navigation }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [freePosts, setFreePosts] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [titleMessage, setTitleMessage] = useState("");
  const [modalLoader, setModalLoader] = useState(false);
  const [openModalMessage, setOpenModalMessage] = useState(false);

  useEffect(async () => {
    const deviceId = await SecureStore.getItemAsync("secure_deviceId");

    if (!freePosts.length) {
      await getFreePosts();
    }
    
    const lead = await getExistingDeviceId(JSON.parse(deviceId), true);

    if (lead === false) {
      setTimeout(() => setOpenForm(true), 1000);
    }
  }, []);

  const getFreePosts = async () => {
    setLoading(true);
    try {
      const { data } = await listAllFreePost();
      setFreePosts(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  const handleSaveLead = async (payload) => {
    setModalLoader(true);
    try {
      await saveLead(payload);

      setMessage(MESSAGE_SUCCESS_SAVE_LEAD);
      setTitleMessage(TITLE_SUCESS_SAVE_LEAD);
      setOpenForm(!openForm);
      setOpenModalMessage(!openModalMessage);
    } catch (e) {
      const statusCode = e.response && e.response.data.status;
      const messageError = e.response && e.response.data.message;

      if (statusCode === 400 && messageError === ERROR_BAD_REQUEST_LEAD_EXIST) {
        setMessage(MESSAGE_LEAD_EXIST);
        setTitleMessage(TITLE_LEAD_EXIST);
        setOpenForm(!openForm);
        setOpenModalMessage(!openModalMessage);
      }
    } finally {
      setModalLoader(false);
    }
  }

  const getExistingDeviceId = async (deviceId, loading) => {
    setLoading(loading);
    try {
      const { isLead } = await findByDeviceId(deviceId);
      return isLead;
    } catch (e) {
      setMessage(ERROR_GENERIC_DEVICE_ID_MESSAGE);
      setTitleMessage(ERROR_GENERIC_DEVICE_ID_TITLE);
      setOpenModalMessage(!openModalMessage);
    } finally {
      setLoading(false);
    }
  }

  const handleOpenForm = () => setOpenForm(!openForm);
  const handleOpenLoaderModal = () => setModalLoader(!modalLoader);
  const handleOpenModalMessage = () => setOpenModalMessage(!openModalMessage);

  const handleOpenFormWithValidate = async () => {
    const deviceId = await SecureStore.getItemAsync("secure_deviceId");
    const lead = await getExistingDeviceId(JSON.parse(deviceId), false);

    if (lead === undefined) return;

    if (lead) {
      setMessage(MESSAGE_LEAD_EXIST);
      setTitleMessage(TITLE_LEAD_EXIST);
      setOpenModalMessage(!openModalMessage);

      return;
    }

    handleOpenForm();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconBackContainer}>
        <AntDesign
          size={32}
          name="left"
          style={styles.iconBack}
          onPress={() => navigation.navigate("Home", {})}
        />
      </View>

      <ScrollView
        style={styles.scrollArea}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <TitlePage
          text="Conteúdo Gratuito"
          styleTitle={styles.titlePage}
        />

        <Loader
          disabled={!loading}
          stylesContainer={styles.loading}
        />

        {freePosts && freePosts.map((card) => (
          <Card
            data={card}
            key={card.id}
          />
        ))}
      </ScrollView>

      <View style={styles.containerButton}>
        <Button
          text="Inscreva-se já!"
          stylesButton={styles.buttonForm}
          stylesText={styles.buttonFormText}
          handleOnPress={handleOpenFormWithValidate}
        />
      </View>

      <FormLead
        visible={openForm}
        submit={handleSaveLead}
        handleClose={handleOpenForm}
      />

      <Modal
        visible={openModalMessage}
        handleClose={handleOpenModalMessage}
        title={titleMessage}
      >
        <Text style={styles.textMessage}>
          {message}
        </Text>

        <Button
          text="Ok"
          stylesText={styles.buttonClose}
          handleOnPress={handleOpenModalMessage}
        />
      </Modal>

      <ModalLoader
        visible={modalLoader}
        handleClose={handleOpenLoaderModal}
      />
    </SafeAreaView>
  );
}

export default FreePost;
