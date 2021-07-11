import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListaProdutos from './views/ListaProdutos/componentes'
import {APP_COLORS} from "./styles/styles";

const Stack = createStackNavigator();

const App = () => {
  return (
       <NavigationContainer>
        <SafeAreaView style={styles.container}>
            <Stack.Navigator intialRouteName="ListaProdutos">
                <Stack.Screen
                    name="ListaProdutos"
                    component={ListaProdutos}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>

        </SafeAreaView>
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
