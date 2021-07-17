import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {DATA} from '../../../utils/data';
import {Item} from './componentes/produto';
import Cabecalho from './componentes/cabecalho';

const ListaProdutos = () => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={DATA}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={<Cabecalho />}
      />
    </View>
  );
};

export default ListaProdutos;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
});
