import { registerRootComponent } from 'expo';
import * as Font from 'expo-font';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Modal from './components/Modal';


const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'Montserrat': require('../assets/fonts/Montserrat-Regular.ttf'),
      'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-ExtraBold': require('../assets/fonts/Montserrat-ExtraBold.ttf'),
    });

    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  return fontsLoaded && (
    <View style={styles.container}>
      {/* Teste seu componente aqui: */}
      <TouchableOpacity
        onPress={() => setOpenModal(true)}
        style={styles.button}
      >
        <Text style={{ backgroundColor: '#000', color: '#fff', height: 40 }}>Clique em mim</Text>
      </TouchableOpacity>

      <Modal
        visible={openModal}
        title="Título da Modal"
        handleClose={() => setOpenModal(!openModal)}
      >
        <Text>OLá a modal agora esta aberta</Text>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFB372'
  },
  button: {
    marginTop: 70
  }
});

export default registerRootComponent(App);
