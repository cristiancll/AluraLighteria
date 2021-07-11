import React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';

const Cabecalho = () => {
  return (
      <>
      <View style={styles.containerHeader}>
          <Text style={styles.header}>Lighteria</Text>
          <View style={styles.containerShoppingBag}>
              <Image
                  source={require('../../../../assets/images/icone-sacola.png')}
                  style={styles.image}
              />
          </View>
      </View>
        <View style={styles.containerDescription}>
            <View style={styles.containerSeparator}/>
            <View style={styles.containerDescriptionText}>
                <Text style={styles.descriptionText}>Categorias</Text>
            </View>
        </View>
      </>
  );
};

export default Cabecalho;

const styles = StyleSheet.create({
    containerHeader:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 6,
        paddingVertical: 16,
    },
    containerShoppingBag:{
        backgroundColor: '#FFF',
        padding: 18,
        borderRadius: 30
    },
    containerDescription:{
        paddingTop: 10,
    },
    containerSeparator:{
        borderWidth: 0.5,
        borderColor: '#A1A5AA',
    },
    containerDescriptionText: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -46,
    },
    descriptionText: {
        padding: 34,
        backgroundColor: '#F4F0F4',
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
        color: '#A1A5AA',
    },
    header:{
        fontFamily: 'OpenSans-ExtraBold',
        fontSize: 34
    },
    image: {
        height: 30,
        width: 30
    }
});
