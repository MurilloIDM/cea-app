import { Button } from '@ant-design/react-native';
import { Text } from 'react-native';

import styles from './styles';

const TitleButton = ({ text }) => {
  return (
    <Button style={styles.DarkButton}>
      <Text style={styles.textLight}>{text}</Text>
    </Button>
  );
}

export default TitleButton;
