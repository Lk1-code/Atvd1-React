import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './TelaInicial';
import ListaVacinas from './ListaVacinas';
import AdicionarVacina from './AdicionarVacina';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator initialRouteName="TelaInicial">
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="ListaVacinas" component={ListaVacinas} />
        <Stack.Screen name="AdicionarVacina" component={AdicionarVacina} />
      </Stack.Navigator>
  }</NavigationContainer>
  );
}
if (__DEV__) {
  require("../ReactotronConfig");
}

export default App;