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
      {/* 
      <View>
        <Text style={{height: 200, width: 200, backgroundColor: 'yellow'}}>
          Hello world!
        </Text>
      </View>
      */}
      <HomeView></HomeView>
    </SafeAreaView>
    </>
  );
};

export default App;
