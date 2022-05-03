import React, { useState, useEffect } from "react";
import { Modal, View, Text, TouchableOpacity, TouchableWithoutFeedback, Linking} from "react-native";
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
            <View style={styles.menuItem}>
              <AntDesign name="setting" size={40} color="#0b0b0b" />
              <Text style={styles.title} >Configurações</Text>
            </View>
            <View style={styles.menuItem}>
              <AntDesign name="logout" size={40} color="#0b0b0b" />
              <Text style={styles.title}>Sair</Text>
            </View>

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
    </Modal>
  );
}

export default MenuConfig;
