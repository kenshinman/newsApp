import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Feeds from './feeds/Feeds';
import { Icon } from "native-base"
import ProfileScreen from './profile/ProfileScreen';
import Cart from './cart/Cart';

const Tab = createBottomTabNavigator()

const HomeScreen = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = "home"
        } else if (route.name === 'Profile') {
          iconName = "person";
          Cart
        } else if (route.name === 'Cart') {
          iconName = "cart";
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}

      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: 'orange', // Main color
          borderTopWidth: 2,
          borderTopColor: 'red', // StatusBar color
        },
      }}>
      <Tab.Screen name="Home" component={Feeds} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}

export default HomeScreen;