import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default function Sobre({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/21/21601.png' }}
        style={styles.imagem}
      />
      <Text style={styles.texto}>
        Este aplicativo de notícias foi desenvolvido para praticar diferentes tipos de navegação com React Navigation e Expo.
      </Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  imagem: { width: 100, height: 100, marginBottom: 20 },
  texto: { fontSize: 16, textAlign: 'center', marginBottom: 20 },
});
