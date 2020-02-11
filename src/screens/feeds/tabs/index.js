import React from 'react';
import {
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import {Container, Content, Text, Icon} from 'native-base';
import TabContent from './TabContent';
import Favourites from './Favourites';

const Tab = createMaterialTopTabNavigator ();

const TopTabs = () => {
  return (
    <Tab.Navigator
      swipeEnabled={true}
      tabBarOptions={{
        activeTintColor: '#fff',
        labelStyle: {fontSize: 14},
        style: {backgroundColor: '#0984e3'},
      }}
    >
      <Tab.Screen
        name="Tab1"
        options={{
          tabBarLabel: 'News',
        }}
        component={TabContent}
      />
      <Tab.Screen
        name="Favourites"
        options={{
          tabBarLabel: 'Favourites',
        }}
        component={Favourites}
      />
    </Tab.Navigator>
  );
};

export default TopTabs;
