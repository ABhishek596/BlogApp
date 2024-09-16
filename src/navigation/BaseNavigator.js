import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from './BottomTab';

const Base = createStackNavigator();

export default function BaseNavigator() {
  return (
    <Base.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        // headerBackTitleVisible: false,
        // cardStyle: {backgroundColor: '#FFFFFF'},
        // cardShadowEnabled: false,
        headerShown: false,
        // animation: 'none',
      }}>
      <Base.Screen name="BottomTab" component={BottomTab} />
    </Base.Navigator>
  );
}
