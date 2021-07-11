import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native';
import {APP_FONTS, APP_COLORS} from "../../../../styles/styles";

export const Item = ({imagem, titulo}) => {
    return(
        <View style={styles.containerItem}>
            <Image source={imagem} style={styles.image} resizeMode="contain"/>
            <Text style={styles.text}>{titulo}</Text>
        </View>
    );

}


const styles = StyleSheet.create({
    containerItem:{
      height: 168,
        backgroundColor: APP_COLORS.WHITE,
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,

    },
   image:{
       height: 84,
   },
    text: {
        marginTop: 8,
        fontFamily: APP_FONTS.FAMILY.SEMI_BOLD,
        fontSize: APP_FONTS.SIZE.REGULAR,
        color: APP_COLORS.LIGHTER_GRAY
    }
});
