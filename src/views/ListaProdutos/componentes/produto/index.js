import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native';

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
        backgroundColor: '#fff',
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
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 14,
        color: '#848486'
    }
});
