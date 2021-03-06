import React from 'react';
import {NavigationContainer, useLinking} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SinglePost from '../screens/posts/SinglePost';

const Drawer = createDrawerNavigator ();

const drawerContent = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.drawerTop}>
        <Image
          source={{uri: 'https://loremflickr.com/200/200/cat'}}
          style={styles.profileImage}
        />
        <Text>Top</Text>
      </View>
      <ScrollView style={styles.drawerBottom}>
        <Text>Hey</Text>
      </ScrollView>
    </View>
  );
};

const RootNavigator = () => {
  const ref = React.useRef ();

  const {getInitialState} = useLinking (ref, {
    prefixes: ['https://punchng.com'],
  });

  const [isReady, setIsReady] = React.useState (false);
  const [initialState, setInitialState] = React.useState ();

  React.useEffect (
    () => {
      getInitialState ().catch (() => {}).then (state => {
        if (state !== undefined) {
          setInitialState (state);
        }

        setIsReady (true);
      });
    },
    [getInitialState]
  );

  if (!isReady) {
    return null;
  }
  return (
    <NavigationContainer initialState={initialState} ref={ref}>
      <Drawer.Navigator drawerContent={drawerContent}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Post" component={SinglePost} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create ({
  drawerTop: {
    backgroundColor: '#6c5ce7',
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerBottom: {
    flex: 1,
    backgroundColor: '#fefefe',
    padding: 10,
    paddingBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: 'white',
    marginBottom: 10,
  },
});

export default RootNavigator;
