import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BaseNavigator from './BaseNavigator';
import AuthNavigator from './AuthNavigator';
import {useSelector} from 'react-redux';

// const isUser = false;

const Stack = createStackNavigator();

export default function AppNavigator() {
  const token = useSelector(state => state.auth.token);
  console.log('token', token);
  // const token = 'eds43ers';
  return (
    <NavigationContainer>
      {token !== null ? (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="BaseNavigator">
          <Stack.Screen name="BaseNavigator" component={BaseNavigator} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="AuthNavigator">
          <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
