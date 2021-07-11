import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {APP_FONTS, APP_COLORS} from "../../../../styles/styles";
import {useNavigation} from "@react-navigation/native";

export const Item = ({imagem, titulo}) => {
    const navigation = useNavigation();
    return(
        <TouchableOpacity style={styles.containerItem} onPress={() => navigation.push('DetalhesProduto')}>
            <Image source={imagem} style={styles.image} resizeMode="contain"/>
            <Text style={styles.text}>{titulo}</Text>
        </TouchableOpacity>
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
        fontSize: APP_FONTS.SIZE.MEDIUM,
        color: APP_COLORS.LIGHTER_GRAY
    }
});
