import { View, Text, TextInput } from "react-native";

import MaskInput from "react-native-mask-input";

import styles from "./styles";

const Input = (props) => {
  const { mask } = props;
  const Component = mask ? InputWithMask : InputWithoutMask;

  return <Component {...props} />;
}

const InputWithMask = ({
  type,
  mask,
  label,
  value,
  focus,
  onChange,
  required,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label} {required && "*"}</Text>

      <MaskInput
        mask={mask}
        value={value}
        autoFocus={focus}
        keyboardType={type}
        style={styles.input}
        onChangeText={onChange}
        placeholder={placeholder}
      />
    </View>
  );
}

const InputWithoutMask = ({
  type,
  label,
  value,
  focus,
  onChange,
  required,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label} {required && "*"}</Text>

      <TextInput
        value={value}
        autoFocus={focus}
        keyboardType={type}
        style={styles.input}
        onChangeText={onChange}
        placeholder={placeholder}
      />
    </View>
  );
}

Input.defaultProps = {
  mask: false,
  value: "",
  label: "",
  focus: false,
  required: false,
  placeholder: "",
  type: "default",
};

export default Input;
