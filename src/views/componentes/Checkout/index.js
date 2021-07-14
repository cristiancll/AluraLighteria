import React, {useContext} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {DataContext} from "../../../provider";
import {APP_COLORS, APP_FONTS} from "../../../styles/styles";
import {Botao} from "../../../componentes/Botao";
import {formatValue} from "../../../utils/utils";
import {CheckoutItem} from "./checkoutItem";
import {useNavigation} from "@react-navigation/native";
export const Checkout = () => {
    const {checkoutItems} = useContext(DataContext);
    const navigation = useNavigation();
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
                    <CheckoutItem {... item} key={item.id}/>
                ))
            }
            <Total>Total: {formatValue(totalValue)}</Total>
            <Botao title={'FECHAR COMPRA'}/>
            <TouchableOpacity onPress={() => navigation.push('ListaProdutos')}>
                <Text style={styles.contShoppingText}>CONTINUAR COMPRANDO</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        fontFamily: APP_FONTS.FAMILY.SEMI_BOLD,
        fontSize: APP_FONTS.SIZE.XX_LARGE,
        marginBottom: 10,
    },
    container:{
        flex: 1,
        margin: 24,
    },
    total: {
        fontFamily: APP_FONTS.FAMILY.BOLD,
        fontSize: APP_FONTS.SIZE.LARGE,
        marginVertical: 36,
    },
    contShoppingText: {
        fontFamily: APP_FONTS.FAMILY.BOLD,
        fontSize: APP_FONTS.SIZE.SMALL,
        color: APP_COLORS.LIGHT_BLUE,
        marginTop: 20,
        textAlign: 'center',
    }
});
