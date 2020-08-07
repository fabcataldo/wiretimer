/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
} from 'react-native';
import HomeView from './src/components/Home/HomeView';

const App = () => {
  return (
    <>
    <SafeAreaView style={{flex: 1}}>
      <HomeView></HomeView>
    </SafeAreaView>
    </>
  );
};

export default App;
