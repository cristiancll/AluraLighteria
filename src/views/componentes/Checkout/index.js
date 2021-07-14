import React, {useContext} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {DataContext} from "../../../provider";
import {APP_COLORS, APP_FONTS} from "../../../styles/styles";
import {Botao} from "../../../componentes/Botao";
import {formatValue} from "../../../utils/utils";
export const Checkout = () => {
    const {checkoutItems} = useContext(DataContext);

    const totalValue = checkoutItems.reduce(
        (basket, currentItem) => basket + currentItem.amount * currentItem.preco, 0
    )

    const Titulo = ({children}) => <Text style={styles.header}>{children}</Text>;
    const Total = ({children}) => <Text style={styles.total}>{children}</Text>;
    return(
        <View style={styles.container}>
            <Titulo>Checkout</Titulo>
            {
                checkoutItems.map((item) => (
                    <View>
                        <Text>
                            {item.titulo}
                        </Text>
                        <Total>{formatValue(totalValue)}</Total>
                    </View>
                ))
            }
            <Botao title={'FECHAR COMPRA'}/>
            <TouchableOpacity>
                <Text style={styles.contShoppingText}>CONTINUAR COMPRANDO</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        fontFamily: APP_FONTS.FAMILY.SEMI_BOLD,
        fontSize: APP_FONTS.SIZE.XX_LARGE,
    },
    container:{
        flex: 1,
        margin: 24,
    },
    total: {
        fontFamily: APP_FONTS.FAMILY.SEMI_BOLD,
        fontSize: APP_FONTS.SIZE.LARGE,
    },
    contShoppingText: {
        fontFamily: APP_FONTS.FAMILY.BOLD,
        fontSize: APP_FONTS.SIZE.SMALL,
        color: APP_COLORS.LIGHT_BLUE,
        marginTop: 20,
        textAlign: 'center',
    }
});
