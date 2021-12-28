import { Text, Modal as ModalNative, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./styles";

const Modal = ({
  title,
  visible,
  children,
  handleClose,
}) => {
  return (
    <ModalNative
      visible={visible}
      transparent={false}
      animationType="slide"
      onRequestClose={handleClose}
    >
      <View style={styles.backgroundExternal}>
        <View style={styles.modal}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>
              {title}
            </Text>

            <AntDesign
              size={22}
              name="close"
              onPress={handleClose}
              style={styles.iconClose}
            />
          </View>

          <View>
            {children}
          </View>
        </View>
      </View>
    </ModalNative>
  );
}

export default Modal;
