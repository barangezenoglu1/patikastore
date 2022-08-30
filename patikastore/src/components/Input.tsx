import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

interface InputProps {}

export const Input: React.FC<InputProps> = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#D6D0D6',
      height: 55,
      borderRadius: 10,
      justifyContent: 'center',
      paddingLeft: 10,
      marginTop: 10,
    },
  });
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search..." />
    </View>
  );
};
