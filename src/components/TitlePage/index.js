import { Text, View } from 'react-native';

import styles from './styles';

const TitlePage = ({ styleTitle, text }) => {
  return (
    <View>
      <Text style={[styles.text, styleTitle]}>{text}</Text>
    </View>
  );
}

export default TitlePage;
