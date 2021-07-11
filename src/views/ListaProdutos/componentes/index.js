import React from 'react';
import {View, FlatList} from 'react-native';
import Cabecalho from './cabecalho';
import {DATA} from '../../../utils/data';
import {Item} from './produto';


const ListaProdutos = () => {
    return <View>
                <FlatList
                    numColumns={2}
                    data={DATA}
                    renderItem={({item})  => <Item {... item}/>}
                    keyExtractor={item => item.id}
                    ListHeaderComponent = { <Cabecalho/> }
                />
            </View>;
};

export default ListaProdutos;
