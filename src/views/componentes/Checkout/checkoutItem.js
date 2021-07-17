import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {APP_COLORS, APP_FONTS} from '../../../styles/styles';
import {formatValue} from '../../../utils/utils';

export const CheckoutItem = ({itemName, titulo, imagem, preco, amount}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imagem} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.itemName}>{itemName}</Text>
        <Text style={styles.title}>{titulo}</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.price}>{formatValue(preco * amount)}</Text>
        <Text style={styles.amount}>Qtd: {amount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: APP_COLORS.WHITE,
    borderRadius: 10,
    marginVertical: 4,
  },
  imageContainer: {
    flex: 20,
    margin: 2,
    backgroundColor: APP_COLORS.VERY_LIGHT_GRAY,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 25, //45
    padding: 18,
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 50,
  },
  valueContainer: {
    flex: 35,
    padding: 18,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: APP_FONTS.SIZE.SMALL,
    fontFamily: APP_FONTS.FAMILY.LIGHT,
  },
  itemName: {
    fontSize: APP_FONTS.SIZE.MEDIUM,
    fontFamily: APP_FONTS.FAMILY.SEMI_BOLD,
  },
  price: {
    fontSize: APP_FONTS.SIZE.MEDIUM,
    padding: 4,
    fontFamily: APP_FONTS.FAMILY.BOLD,
  },
  amount: {
    textAlign: 'center',
    padding: 4,
    fontSize: APP_FONTS.SIZE.X_SMALL,
    fontFamily: APP_FONTS.FAMILY.SEMI_BOLD,
  },
});
