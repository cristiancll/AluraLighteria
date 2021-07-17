import React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';
import {Sacola} from '../../../../../componentes/sacola';
import {APP_COLORS, APP_FONTS} from '../../../../../styles/styles';

const Cabecalho = () => {
  return (
    <>
      <View style={styles.containerHeader}>
        <Text style={styles.header}>Lighteria</Text>
        <Sacola />
      </View>
      <View style={styles.containerDescription}>
        <View style={styles.containerSeparator} />
        <View style={styles.containerDescriptionText}>
          <Text style={styles.descriptionText}>Categorias</Text>
        </View>
      </View>
    </>
  );
};

export default Cabecalho;

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 16,
  },
  containerDescription: {
    paddingTop: 10,
  },
  containerSeparator: {
    borderWidth: 0.5,
    borderColor: APP_COLORS.LIGHTER_GRAY,
  },
  containerDescriptionText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  descriptionText: {
    padding: 34,
    backgroundColor: APP_COLORS.BACKGROUND,
    fontSize: APP_FONTS.SIZE.MEDIUM,
    fontFamily: APP_FONTS.FAMILY.REGULAR,
    color: APP_COLORS.LIGHTER_GRAY,
  },
  header: {
    fontFamily: APP_FONTS.FAMILY.EXTRA_BOLD,
    fontSize: APP_FONTS.SIZE.XX_LARGE,
  },
});
