import { ImageBackground, StyleSheet, Text } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import Login from './src/components/login';
import Menu from './src/components/menu';

// Usando require para importar uma imagem local
const image = require('./assets/S4R41VA.png');

export default function App() {
  const [user, setUser] = useState('');

  //SE NAO TIVER ERRADO
  if (!user) {
    return <Login changeStatus={(user) => setUser(user)} />;
  }

  //Logado acessa o Menu
  return (    
    /*<SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Text style={styles.text}>Olá, React Native!</Text>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
    */
    <Menu />
  );
}

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
