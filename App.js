import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Platform, Text, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const videoRef = useRef(null);
  const [appIsReady, setAppIsReady] = useState(false);
  const [videoFinished, setVideoFinished] = useState(false);

  useEffect(() => {
    if (Platform.OS !== 'web') {
      async function prepare() {
        try {
          await SplashScreen.preventAutoHideAsync();
          // Simula um carregamento
          await new Promise(resolve => setTimeout(resolve, 2000));
        } catch (e) {
          console.warn(e);
        } finally {
          setAppIsReady(true);
          await SplashScreen.hideAsync();
        }
      }

      prepare();
    } else {
      // No ambiente web, apenas define o app como pronto
      setAppIsReady(true);
    }
  }, []);

  // Função para detectar quando o vídeo termina
  const handlePlaybackStatusUpdate = (status) => {
    if (status.didJustFinish && !status.isLooping) {
      setVideoFinished(true); // Marca o vídeo como finalizado
    }
  };

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container}>
      {Platform.OS !== 'web' && !videoFinished && (
        <Video
          ref={videoRef}
          source={require('./assets/Logo.mp4')}
          style={styles.video}
          resizeMode="cover"
          shouldPlay
          isLooping={false} // Remove o loop
          onPlaybackStatusUpdate={handlePlaybackStatusUpdate} // Detecta quando o vídeo termina
        />
      )}
      {videoFinished && (
        <View style={styles.content}>
          <Text>Criando uma Splash Screen</Text>
          <StatusBar style="auto" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%', // Ocupa toda a largura da tela
    height: '100%', // Ocupa toda a altura da tela
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});