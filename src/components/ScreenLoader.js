import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const ScreenLoader = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default ScreenLoader;
