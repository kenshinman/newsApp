import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feeds from './feeds/Feeds';
import {Icon} from 'native-base';
import ProfileScreen from './profile/ProfileScreen';
import Cart from './cart/Cart';

const Tab = createBottomTabNavigator ();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Profile') {
            iconName = 'person';
            Cart;
          } else if (route.name === 'Cart') {
            iconName = 'cart';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={32} style={{color}} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#3F51B5',
        inactiveTintColor: 'grey',
        style: {
          height: 50,
          paddingTop: 8,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        options={{
          activeTintColor: 'red',
        }}
        name="Home"
        component={Feeds}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
