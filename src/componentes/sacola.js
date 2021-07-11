import React from 'react';

import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {APP_COLORS} from "../styles/styles";
import {useNavigation} from "@react-navigation/native";

export const Sacola = () => {
    const navigation = useNavigation();
  return (
      <TouchableOpacity onpress={() => navigation.push('Checkout')}>
          <View style={styles.containerShoppingBag}>
              <Image
                  source={require('../assets/images/icone-sacola.png')}
                  style={styles.image}
              />
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
    }
});
