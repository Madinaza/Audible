/* eslint-disable react/no-unstable-nested-components */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import GetStartedScreen from '../screens/getStarted';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import SeacrhIcon from '../assets/icons/magnifying-glass-solid (1).svg';
import BookIcon from '../assets/icons/book-open-reader-solid.svg';
import Search from '../screens/search';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Tab2 = () => {
  return <Text>tab2</Text>;
};
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: '#00235B', height: 60},
        header: () => null,
      }}>
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <SeacrhIcon
              width={30}
              height={30}
              fill={focused ? '#fff' : '#BDCDD6'}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2}
        options={{
          tabBarIcon: ({focused}) => (
            <BookIcon
              width={30}
              height={30}
              fill={focused ? '#fff' : '#BDCDD6'}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tab.Navigator>
  );
};
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
        {/* <Stack.Screen name="SearchScreen" component={SearchScreen} /> */}
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
