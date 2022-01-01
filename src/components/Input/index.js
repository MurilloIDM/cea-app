import { View, Text, TextInput } from 'react-native';
import MaskInput from 'react-native-mask-input';

import styles from './styles';

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
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

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
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

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
  placeholder: "",
  type: "default",
};

export default Input;
