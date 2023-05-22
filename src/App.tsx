import React from 'react';

import { Text } from 'react-native';
import GetStarted from './GetStarted';
import Card from './Card';
// import MyBooks from './mybooks';
// import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SearchScreen from './SearchScreen';
import SplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();
const App = () => {
  return (
    // <NavigationContainer
    //   onReady={() => {
    //     SplashScreen.hide();
    //   }}>
    //   <Stack.Navigator initialRouteName="GetStarted">
    //     <Stack.Screen name="GetStarted" component={GetStarted} />
    //     <Stack.Screen name="SearchScreen" component={SearchScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <Card />
  );
};
export default App;
