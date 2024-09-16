import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Loginscreen from '../screens/login/Loginscreen';
import SignUpScreen from '../screens/signup/SignUpScreen';

const Auth = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Auth.Navigator
      initialRouteName="Loginscreen"
      screenOptions={{
        // headerBackTitleVisible: false,
        // cardStyle: {backgroundColor: '#FFFFFF'},
        // cardShadowEnabled: false,
        headerShown: false,
        // animation: 'none',
      }}>
      <Auth.Screen name="Loginscreen" component={Loginscreen} />
      <Auth.Screen name="SignUpScreen" component={SignUpScreen} />
    </Auth.Navigator>
  );
}
