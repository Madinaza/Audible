import React from 'react';

<<<<<<< HEAD
 import {Text} from 'react-native';
 import GetStarted from './GetStarted';

 import Detail from './Detail';
=======
// import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import GetStarted from './GetStarted';
import SearchScreen from './SearchScreen';
>>>>>>> 0dc6f2f067030eedb08808fad3c8a735ab90f02f

const Stack = createStackNavigator();
const App = () => {
<<<<<<< HEAD
  return ( 
    // <GetStarted />;
  <Detail/>
) 
=======
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="SearchScreen" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
>>>>>>> 0dc6f2f067030eedb08808fad3c8a735ab90f02f
};

export default App;
