
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Teste from '../../Pages/Pord/Teste';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Teste" component={Teste} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;