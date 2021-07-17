import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {APP_COLORS, APP_FONTS} from '../styles/styles';

export const Botao = ({title, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnContainer}>
        <Text style={styles.btnText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: APP_COLORS.LIGHT_BLUE,
    padding: 20,
    borderRadius: 6,
  },
  btnText: {
    fontFamily: APP_FONTS.FAMILY.SEMI_BOLD,
    fontSize: APP_FONTS.SIZE.MEDIUM,
    color: APP_COLORS.WHITE,
    textAlign: 'center',
  },
});
