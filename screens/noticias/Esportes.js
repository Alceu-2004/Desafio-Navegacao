import React from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import CardNoticia from '../../components/CardNoticia';

export default function Esportes({ navigation }) {
  const noticias = [
    { id: '1', titulo: 'Time X vence campeonato', conteudo: 'Resumo da partida...' },
    { id: '2', titulo: 'Atleta quebra recorde mundial', conteudo: 'Detalhes da conquista...' },
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
