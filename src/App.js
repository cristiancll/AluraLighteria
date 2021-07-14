import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {APP_COLORS} from "./styles/styles";
import ListaProdutos from "./views/componentes/ListaProdutos";
import {DetalhesProduto} from "./views/componentes/DetalhesProduto";
import Provider from "./provider";

const Stack = createStackNavigator();

const App = () => {
  return (
       <NavigationContainer>
           <Provider>
               <SafeAreaView style={styles.container}>
                   <Stack.Navigator intialRouteName="ListaProdutos">
                       <Stack.Screen
                           name="ListaProdutos"
                           component={ListaProdutos}
                           options={{headerShown: false}}
                       />
                       <Stack.Screen
                           name="DetalhesProduto"
                           component={DetalhesProduto}
                           options={{headerShown: false}}
                       />
                   </Stack.Navigator>

               </SafeAreaView>
           </Provider>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: APP_COLORS.BACKGROUND
    }
});

export default App;
