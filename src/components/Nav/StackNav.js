
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Produto from '../../Pages/Produto/Produto';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Produto" component={Produto} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;