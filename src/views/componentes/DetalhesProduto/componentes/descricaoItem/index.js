import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import {APP_COLORS} from "../../../../../styles/styles";

export const DescricaoItem = ({
  imagem, estudio, itemDesc, itemName, titulo, preco, id
}) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemPosicao}>
                <View style={styles.item}>
                    <Text>{titulo}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flex:4,
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
    }
});
