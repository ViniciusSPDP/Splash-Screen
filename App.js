import { ImageBackground, StyleSheet, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/components/login';
 
// Usando require para importar uma imagem local
const image = require('./assets/S4R41VA.png');
 
const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['left', 'right']}>
      {/*<ImageBackground source={image} resizeMode="cover" style={styles.image}>*/}
        <Text style={styles.text}>Olá, React Native!</Text>
        <Login />
      {/*</ImageBackground>*/}
    </SafeAreaView>
  </SafeAreaProvider>
);
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
 
export default App;