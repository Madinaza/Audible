import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Search from '../../screens/search';
import SeacrhIcon from '../../assets/icons/magnifying-glass-solid (1).svg';
import BookIcon from '../../assets/icons/book-open-reader-solid.svg';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

const Tab2 = () => {
  return <Text>tab2</Text>;
};

export const TabNavigator = () => {
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
