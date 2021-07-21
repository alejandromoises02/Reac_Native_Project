import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CategoryTourismoContainer } from "./components/CategoryTourismoContainer/CategoryTourismoContainer";
import { CategorySelectedView } from "./components/CategorySelectedView/CategorySelectedView";
import { Provider } from "react-redux";
import store from "./store";
/*import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Remote debugger']);*/

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={CategoryTourismoContainer} />
          <Stack.Screen name="Categories" component={CategorySelectedView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
