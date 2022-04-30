import { Modal, View, Text } from "react-native";

import styles from "./styles";

const MenuConfig = ({
  visible,
  handleClose,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={handleClose}
    >
      <View style={styles.backgroundExternal}>
        <View style={styles.modalContent}>
          <Text>Configurações</Text>
        </View>
      </View>
    </Modal>
  );
}

export default MenuConfig;
