import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Detalhe({ route, navigation }) {
  const { titulo, conteudo } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({ title: titulo });
  }, [navigation, titulo]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.conteudo}>{conteudo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  conteudo: { fontSize: 16, lineHeight: 22 },
});
