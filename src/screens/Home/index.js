import React, { useState, useEffect } from "react";
import { View, Image, StatusBar, Linking } from "react-native";

import "react-native-get-random-values";
import { v4 as uuidV4 } from "uuid"; 
import * as SecureStore from "expo-secure-store";
import { SafeAreaView } from "react-native-safe-area-context";

import Button from "../../components/Button";
import SocialLink from "../../components/SocialLink";

import logoMain from "../../../assets/images/logoMain.png";
import iconYoutube from "../../../assets/images/icon_youtube.png";
import iconFacebook from "../../../assets/images/icon_facebook.png";
import iconInstagram from "../../../assets/images/icon_instagram.png";

import styles from "./styles";

const Home = ({ navigation }) => {
  const [facebookUrl, setFacebookUrl] = useState("");

  const fbUrlApp = "fb://page/625309614329540/";
  const fbUrlWeb = "https://www.facebook.com/entendendoadolescencia/";


  const getFacebookLink = async () => {
    Linking.canOpenURL(fbUrlApp).then((result) => {
      setFacebookUrl(result ? fbUrlApp : fbUrlWeb);
    })
  };

  useEffect(async () => {
    getFacebookLink();
    const deviceId = await SecureStore.getItemAsync("secure_deviceId");
    
    if (!deviceId) {
      const uuid = uuidV4();
      await SecureStore.setItemAsync("secure_deviceId", JSON.stringify(uuid));
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#BFB372"
      />

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

      <Image
        resizeMode="contain"
        style={styles.logoMain}
        source={logoMain}
      />

      <View style={styles.containerButtons}>
        <Button
          text="Entrar"
          disabled={true}
          stylesButton={styles.buttonLogin}
          stylesText={styles.buttonLoginText}
          handleOnPress={() => console.log("Entrar")}
        />

        <Button
          text="Conteúdo Gratuito"
          stylesButton={styles.freeContent}
          stylesText={styles.freeContentText}
          stylesAnimated={styles.freeContentAnimated}
          handleOnPress={() => navigation.navigate("FreeContent", {})}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;
