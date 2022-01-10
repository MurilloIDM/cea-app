import { Text, View } from 'react-native';
import styles from './styles';

const TitlePage = ({text}) => {
    return (
        <View>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

export default TitlePage;