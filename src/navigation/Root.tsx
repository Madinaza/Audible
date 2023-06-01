import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import GetStartedScreen from '../screens/getStarted';
import {TabNavigator} from './tabNavigator';
import {BookDetails} from '../screens/bookDetails';

const Stack = createStackNavigator();

export const Root = () => {
  return (
    <NavigationContainer
      onReady={() => {
        SplashScreen.hide();
      }}>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
        initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="BookDetails" component={BookDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
