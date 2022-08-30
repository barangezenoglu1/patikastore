/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Header} from './src/components/Header';
import {Input} from './src/components/Input';
import {ProductContainer} from './src/components/ProductContainer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header titleColor="#A309BB" title="PATIKASTORE" />
      <Input />
      <ProductContainer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default App;
