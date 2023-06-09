import React from 'react';
import { Home } from './src/pages/Home/Home'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Registrar } from './src/pages/Registrar/Registrar';
import { Login } from './src/pages/Login/Login';
import { Choose } from './src/pages/ChooseScreen/Choose';
import { DreamsVilleHouse } from './src/pages/DreamsVilleHouse/dreamsVilleHouse';

const Stack = createNativeStackNavigator()

export default function App (){

  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Registrar" component={Registrar}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Choose" component={Choose}/>
            <Stack.Screen name="Dream" component={DreamsVilleHouse}/>
          </Stack.Navigator>
        </NavigationContainer>
    </GestureHandlerRootView>
  );
}

