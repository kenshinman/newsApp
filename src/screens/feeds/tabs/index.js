import React from 'react';
import {
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs';
import { Container, Content, Text, Icon } from 'native-base';
import TabContent from './TabContent';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator
      swipeEnabled={true}
      tabBarOptions={{
        activeTintColor: '#fff',
        labelStyle: { fontSize: 14 },
        style: { backgroundColor: '#0984e3' },
      }}
    >
      <Tab.Screen
        name="Tab1"
        options={{
          tabBarLabel: "First Tab"
        }}
        component={TabContent}
      />
      <Tab.Screen name="Tab2" options={{
        tabBarLabel: "Second Tab"
      }} component={TabContent} />
    </Tab.Navigator>
  );
};

export default TopTabs;
