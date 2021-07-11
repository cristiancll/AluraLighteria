import React from 'react';
import {View, StyleSheet} from 'react-native';

export const DetalhesProduto = ({route}) => {
    const {id, titulo, itemName, itemDesc, preco, imagem, estudio,} = route.params;
    return (
      <View style={styles.container}>
          <Background/>
          <DescricaoItem
              imagem={imagem}
              estudio={estudio}
              itemDesc={itemDesc}
              itemname={itemName}
              titulo={titulo}
              preco={preco}
              id={id}
          />
      </View>
    );
};

const styles = StyleSheet.create({
   container: {
       flex: 1,
   }
});
