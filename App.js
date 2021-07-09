import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { CategoryTourismoContainer } from "./components/CategoryTourismoContainer/CategoryTourismoContainer";
import { ViajesView } from "./components/ViajesView/ViajesView";
import { PaquetesView } from "./components/PaquetesView/PaquetesView";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Remote debugger']);


const Stack = createStackNavigator();

export default function App() {
 

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={CategoryTourismoContainer}/>
        <Stack.Screen name="Viajes" component={ViajesView}/>
        <Stack.Screen name="Paquetes" component={PaquetesView}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


