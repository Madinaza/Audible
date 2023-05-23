import React from 'react';


import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import GetStarted from './GetStarted';
import SearchScreen from './SearchScreen';
import Detail from './Detail';

const Stack = createStackNavigator();
const App = () => {
  return (<Detail />
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="GetStarted">
    //     <Stack.Screen name="GetStarted" component={GetStarted} />
    //     <Stack.Screen name="SearchScreen" component={SearchScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
