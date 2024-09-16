import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import PostScreen from '../screens/postdata/PostScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../screens/profile/ProfileScreen';


const Tab = createBottomTabNavigator();



const BottomTab = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Post') {
            iconName = focused ? 'add-circle-sharp' : 'add-circle-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: '#FEC453',
        tabBarInactiveTintColor: 'gray',
      })}
      >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <Tab.Screen
        name="Post"
        component={PostScreen}
        options={() => ({
          headerShown: false,
        })}
      />
        <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    

   
    </Tab.Navigator>
  );
};

// const styles =  StyleSheet.create({
//     tabBarStyle:{
//         backgroundColor: '#ffffff', 
//         borderRadius: 12, 
//         marginHorizontal: 0, 
//         paddingVertical: 8,  
//         height: 60, 
//         paddingBottom: 8, 
//         elevation: 15,
//     },
    
//     activeLabelStyle: {
//         fontFamily: 'bold',
//         fontSize: 12,
//         marginBottom: -3,
//         color: "#ffffff",
//     },

//     inactiveLabelStyle: {
//         fontFamily: '',
//         // fontSize: 11,
//         fontSize: SIZES.width * .03,
//         marginBottom: -3,
//         color: COLORS.white,
//     },


    
//     logo:{
//         width: SIZES.width * .15,
//         height: SIZES.height * .05,
//     },
   
//     headerBtn:{
//         width: SIZES.width * .1,
//         height: SIZES.height * .05,
//         justifyContent:'center',
//         alignItems:'center',
//         borderWidth:1,
//         borderRadius:50,
//         backgroundColor: '#FDFDFD',
//         borderColor: '#E3E9ED',
//         marginRight: SIZES.width * .04,
//     },
//     header:{
//         backgroundColor: COLORS.white,
//         elevation:10,
//     },

//     headerStyle: {
//         backgroundColor: COLORS.primary,
//         elevation: 10,
//         // shadowColor: 'rgba(0, 0, 0, 0.25)'
//     },

//     headerTitleStyle: {
//         fontFamily: FONTS.medium,
//         // fontSize: 17,
//         fontSize: SIZES.width * .052,
//         color: COLORS.white,
//         marginBottom: -6,
//         textAlign: 'center',
//     },
   
//   })

export default BottomTab;
