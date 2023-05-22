import React from 'react';

// import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import GetStarted from './GetStarted';
<<<<<<< Updated upstream
import SearchScreen from './SearchScreen';
import SplashScreen from 'react-native-splash-screen';
=======
// import SearchScreen from './SearchScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {Text} from 'react-native-svg';
>>>>>>> Stashed changes

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const Tab1 = () => {
  return <Text>tab1</Text>;
};
const Tab2 = () => {
  return <Text>tab2</Text>;
};
const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
    </Tab.Navigator>
  );
};
const App = () => {
  return (
<<<<<<< Updated upstream
    <NavigationContainer
      onReady={() => {
      SplashScreen.hide();
      }}>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
=======
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{header: () => null}}
          initialRouteName="GetStarted">
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
>>>>>>> Stashed changes
  );
};
export default App;
