import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import CardNoticia from '../../components/CardNoticia';

export default function Tecnologia({ navigation }) {
  const noticias = [
    { id: '1', titulo: 'Nova IA revoluciona mercado', conteudo: 'Detalhes sobre IA...' },
    { id: '2', titulo: 'Lançamento de smartphone', conteudo: 'Especificações e novidades...' },
  ];

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={noticias}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Detalhe', item)}
          >
            <CardNoticia titulo={item.titulo} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
