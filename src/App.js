import { registerRootComponent } from 'expo';
import { StyleSheet, View } from 'react-native';

import TitleButton from './components/TitleButton';


const App = () => {
  return (
    <View style={styles.container}>
      {/* Teste seu componente aqui: */}
      <TitleButton text='Clique aqui' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default registerRootComponent(App);
