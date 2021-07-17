import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Sacola} from '../../../../../componentes/sacola';

export const Background = () => {
  const imgSrc = require('../../../../../assets/images/bgimg.jpg');
  const navigation = useNavigation();

  return (
    <View style={styles.bgContainer}>
      <ImageBackground
        source={imgSrc}
        resizeMode="cover"
        style={styles.imageBackground}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../../../assets/images/flecha-esquerda.png')}
              style={styles.returnImage}
            />
          </TouchableOpacity>
          <View style={styles.shoppingBagContainer}>
            <Sacola />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    flex: 6,
  },
  imageBackground: {
    width: Dimensions.get('window').width,
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  returnImage: {
    width: 24,
    height: 24,
    marginTop: 36,
    marginLeft: 24,
  },
  shoppingBagContainer: {
    padding: 18,
  },
});
