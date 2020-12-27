/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigation from './src/navigation/stack';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <RootNavigation />
    </>
  );
};

export default App;
