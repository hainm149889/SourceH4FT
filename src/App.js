import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  Image,
  ImageBackground,
} from 'react-native';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { createStackNavigator } from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';
import LoginScreen from './LoginScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// const Tab = createMaterialBottomTabNavigator();  --using like bottomtab
// const Tab = createMaterialTopTabNavigator(); -- not using tabBarBadge
const Drawer = createDrawerNavigator();

function AppStack () {
  return (
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal', 
        }}
        headerMode="float"
        animation="fade"
      >
        <Stack.Screen
          name="Home"
          component={ScreenA}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen name="User" component={ScreenB} />
      </Stack.Navigator>
  );
}
function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
              size = focused ? 30 : 20;
              color = focused ? 'red' : 'black';
            } else if (route.name === 'User') {
              iconName = 'user';
              size = focused ? 30 : 20;
              color = focused ? 'red' : 'black';
            }
            return <Entypo name={iconName} size={size} color={color} />;
          },
        })}
        // not using color line 56 and 60
        // tabBarOptions ={{
        //   activeTintColor: 'pink',
        //   inactiveTintColor: 'yellow',
        //   activeBackGroundColor: 'white',
        //   inactiveBackGroundColor: 'grey',
        //   lableStyle:{fontSize: 14},
        //   showIcon: true,
        // }}
        //   activeColor: 'white',
        //   inactiveColor: 'green',
        //   barStyle={backgroundColor: 'blue'}
      >
        <Stack.Screen
          name="Home"
          component={ScreenA}
          options={{
            // header: () => null,
            tabBarBadge: 5,
          }}
        />
        <Stack.Screen name="User" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
