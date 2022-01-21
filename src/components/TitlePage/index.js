import { Text, View } from 'react-native';
import styles from './styles';



const TitlePage = ({styleTitle, text}) => {
    return (
        <View>
            <Text style={[styleTitle, styles.text]}>{text}</Text>
        </View>
    );
}

export default TitlePage;