import React, { useState, useEffect } from "react";
import { Modal, View, Text, TouchableOpacity, TouchableWithoutFeedback, Linking, Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import SocialLink from "../SocialLink";

import iconYoutube from "../../../assets/images/icon_youtube.png";
import iconFacebook from "../../../assets/images/icon_facebook.png";
import iconInstagram from "../../../assets/images/icon_instagram.png";

import styles from "./styles";

const MenuConfig = ({
  visible,
  handleClose,
}) => {
  const [facebookUrl, setFacebookUrl] = useState("");
  const [configModalVisible, setConfigModalVisible] = useState(false);

  const fbUrlApp = "fb://page/625309614329540/";
  const fbUrlWeb = "https://www.facebook.com/entendendoadolescencia/";

  const getFacebookLink = async () => {
    Linking.canOpenURL(fbUrlApp).then((result) => {
      setFacebookUrl(result ? fbUrlApp : fbUrlWeb);
    })
  };

  useEffect(() => getFacebookLink(), []);


  return (
      <Modal
        visible={visible}
        transparent={true}
        animationType="fade"
        statusBarTranslucent={true}
        onRequestClose={handleClose}
      >
        <TouchableOpacity
          style={styles.backgroundExternal}
          activeOpacity={1}
          onPressOut={handleClose}
        >
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <Pressable
                style={styles.menuItem}
                onPress={() => setConfigModalVisible(true)}
              >
                <AntDesign name="setting" size={32} color="#0b0b0b" />
                <Text style={styles.label} >Configurações</Text>
              </Pressable>
              <Pressable
                style={styles.menuItem}
                onPress={() => console.log('Saiu da aplicação')}
              >
                <AntDesign name="logout" size={32} color="#0b0b0b" />
                <Text style={styles.label}>Sair</Text>
              </Pressable>

              {facebookUrl != "" && <View style={styles.containerSocial}>

                <SocialLink
                  url={facebookUrl}
                  pathImage={iconFacebook}
                  stylesImage={styles.iconSocial}
                />

                <SocialLink
                  url={"https://www.instagram.com/entendendoadolescencia/"}
                  pathImage={iconInstagram}
                  stylesImage={styles.iconSocial}
                />

                <SocialLink
                  url={"https://www.youtube.com/channel/UCBYHZKmqmdyEUg8J4fVBHpw"}
                  pathImage={iconYoutube}
                  stylesImage={styles.iconSocial}
                />
              </View>}
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
        <Modal
          visible={configModalVisible}
          transparent={true}
          animationType="fade"
          statusBarTranslucent={true}
          onRequestClose={() => { setConfigModalVisible(false); handleClose() }}
        >
          <TouchableOpacity
            style={styles.backgroundExternal}
            activeOpacity={1}
            onPressOut={() => { setConfigModalVisible(false); handleClose() }}
          >
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Pressable
                  style={styles.headerConfigMenu}
                  onPress={() => { setConfigModalVisible(false) }}
                >
                  <AntDesign
                    name="left"
                    size={32}
                    color="black"
                    style={styles.backButton}
                  />
                  <Text style={styles.title}>
                    Menu
                  </Text>
                </Pressable>

                <Pressable
                  style={styles.menuItem}
                  onPress={() => console.log('Vai para troca de senha')}
                >
                  <AntDesign name="lock1" size={32} color="#0b0b0b" />
                  <Text style={styles.label} >Trocar de senha</Text>
                </Pressable>
                <Pressable
                  style={styles.menuItem}
                  onPress={() => Linking.openURL('mailto:contato@talmidimcoaching.com.br')}
                >
                  <AntDesign name="mail" size={32} color="#0b0b0b" />
                  <Text style={styles.label}>Fale Conosco</Text>
                </Pressable>
                <Pressable
                  style={styles.menuItem}
                  onPress={() => console.log('Abrir termos de uso')}
                >
                  <AntDesign name="filetext1" size={32} color="#0b0b0b" />
                  <Text style={styles.label}>Termos de uso</Text>
                </Pressable>
              </View>
            </TouchableWithoutFeedback>
          </TouchableOpacity>
        </Modal>
      </Modal>
  );
}

export default MenuConfig;
