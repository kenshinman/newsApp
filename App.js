import React, {useState, useEffect} from 'react';
import {ActivityIndicator, StatusBar, Platform, View} from 'react-native';
import RootNavigator from './src/config/RootNavigator';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import {StyleProvider} from 'native-base';
import PostsContextProvider from './src/contexts/PostsContext';

export default function App () {
  const [loading, setLoading] = useState (true);

  const loadFont = async () => {
    await Font.loadAsync ({
      Roboto: require ('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require ('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    setLoading (false);
  };

  useEffect (() => {
    loadFont ();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  return (
    <StyleProvider style={getTheme (material)}>
      <PostsContextProvider>
        <RootNavigator />
      </PostsContextProvider>
    </StyleProvider>
  );
}
