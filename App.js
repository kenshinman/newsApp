import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StatusBar, Platform, View } from 'react-native';
import RootNavigator from './src/config/RootNavigator';
import * as Font from 'expo-font';
import { Ionicons } from "@expo/vector-icons"

export default function App () {
  const [loading, setLoading] = useState(true);

  const loadFont = async () => {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    setLoading(false)
  }

  useEffect(() => {
    loadFont()
  }, [])

  if (loading) {
    return (
      <View>
        <ActivityIndicator animating={true} size="large" />
      </View>
    )
  }

  return (
    <>
      <View style={{ height: Platform.select({ android: StatusBar.currentHeight }) }}></View>
      <RootNavigator />
    </>
  );
}

