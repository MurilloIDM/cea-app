import { Modal as ModalNative, View } from "react-native";

import Loader from "../Loader";

import styles from "./styles";

const ModalLoader = ({
  visible,
  handleClose,
}) => {
  return (
    <ModalNative
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={handleClose}
    >
      <View style={styles.backgroundExternal}>
        <Loader color="#fff" />
      </View>
    </ModalNative>
  );
}

export default ModalLoader;
