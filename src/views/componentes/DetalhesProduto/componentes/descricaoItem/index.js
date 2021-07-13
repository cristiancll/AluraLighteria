import React from "react";
import {Image, StyleSheet, Text, View} from 'react-native';
import {APP_COLORS, APP_FONTS} from "../../../../../styles/styles";
import {Botao} from "../../../../../componentes/Botao";

export const DescricaoItem = ({
  imagem, estudio, itemDesc, itemName, titulo, preco, id
}) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemPosicao}>
                <View style={styles.item}>
                    <View style={styles.textPosition}>
                        <View>
                            <Text style={styles.upperText}>{estudio}</Text>
                            <Text style={styles.mediumText}>{itemName}</Text>
                            <Text style={styles.lowerText}>{titulo}</Text>
                        </View>
                        <Image source={imagem} style={styles.image}/>
                    </View>
                    <Text style={styles.descriptionText}>{itemDesc}</Text>
                    <View style={styles.footer}>
                        <Text style={styles.itemPrice}>{preco}</Text>
                        <Botao title={'COMPRAR'} width={'100'}/>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flex:4,
        marginTop: -60,
    },
    itemPosicao: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    item: {
        backgroundColor: APP_COLORS.WHITE,
        borderRadius: 30,
        padding: 38,
        width: '80%',
        elevation: 4,
    },
    textPosition: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        width: 30,
        height: 72,
    },
    upperText: {
      fontFamily: APP_FONTS.FAMILY.BOLD,
        fontSize: APP_FONTS.SIZE.MEDIUM,
        marginBottom: 4,
    },
    mediumText: {
        fontFamily: APP_FONTS.FAMILY.BOLD,
        fontSize: APP_FONTS.SIZE.X_LARGE,
        marginBottom: 4,
    },
    lowerText: {
        fontFamily: APP_FONTS.FAMILY.REGULAR,
        fontSize: APP_FONTS.SIZE.SMALL,
        color: APP_COLORS.LIGHT_GRAY,
        marginBottom: 12,
    },
    descriptionText: {
        fontFamily: APP_FONTS.FAMILY.REGULAR,
        fontSize: APP_FONTS.SIZE.SMALL,
        marginTop: 10,
        color: APP_COLORS.LIGHTER_GRAY,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    itemPrice: {
        fontFamily: APP_FONTS.FAMILY.BOLD,
        fontSize: APP_FONTS.SIZE.LARGE,
        color: APP_COLORS.BLACK,
    }

});
