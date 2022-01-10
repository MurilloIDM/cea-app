import { Text, View } from 'react-native';
import styles from './styles';

// const Texto = (props) => {
//     return (
//       <View style={{alignItems: 'center'}}>
//         <Text> {props.text}</Text>
//       </View>
//     );
// }
const TitlePage = ({text}) => {
    return (
        <View>
            <Text style={styles.text}>{text}</Text>
        </View>
    );
}

export default TitlePage;



// export default LotsOfGreetings = () => {
//     return (
//       <View style={{alignItems: 'center', top: 50}}>
//         <Greeting name='Rexxar' />
//         <Greeting name='Jaina' />
//         <Greeting name='Valeera' />
//       </View>
//     );
// }