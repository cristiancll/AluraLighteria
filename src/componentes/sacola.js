import React, {useContext} from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {APP_COLORS, APP_FONTS} from "../styles/styles";
import {useNavigation} from "@react-navigation/native";
import {DataContext} from "../provider";

export const Sacola = () => {
    const navigation = useNavigation();
    const {checkoutItems} = useContext(DataContext);
  return (
      <TouchableOpacity onpress={() => navigation.push('Checkout')}>
          <View style={styles.containerShoppingBag}>
              <Image
                  source={require('../assets/images/icone-sacola.png')}
                  style={styles.image}
              />
              {
                  checkoutItems.length > 0 ?
                    (<View style={styles.amountContainer}>
                      <Text style={styles.amountText}>{checkoutItems.reduce((basket, currentItem) => basket + currentItem.amount)}</Text>
                    </View>) : null
              }
          </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    containerShoppingBag:{
        backgroundColor: APP_COLORS.WHITE,
        padding: 18,
        borderRadius: 30
    },
    image: {
        height: 30,
        width: 30
    },
    amountContainer: {
        backgroundColor: APP_COLORS.RED,
        borderRadius: 100,
        marginTop: -22,
        marginLeft: 11,
    },
    amountText: {
        textAlign: 'center',
        padding: 3,
        color: APP_COLORS.WHITE,
        fontFamily: APP_FONTS.FAMILY.BOLD,
        fontSize: APP_FONTS.SIZE.X_SMALL,
    }
});
