import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Detalhe({ route }) {
  const navigation = useNavigation();
  const { item, tipo } = route.params;
  const { titulo, conteudo } = item;

  useLayoutEffect(() => {
    navigation.setOptions({ title: titulo });
  }, [navigation, titulo]);

  return (
    <ScrollView style={styles.container}>
      {/* Categoria acima do título */}
      <Text style={styles.tipo}>{tipo}</Text>

      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.conteudo}>{conteudo}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  tipo: {
    fontSize: 13,
    color: '#999',
    marginBottom: 4,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  conteudo: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
});
