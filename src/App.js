import React from 'react';
import {SafeAreaView, Text, View, Image, StyleSheet} from 'react-native';

import ListaProdutos from './views/ListaProdutos/componentes'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
        <ListaProdutos/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F0F4'
    }
});

export default App;
