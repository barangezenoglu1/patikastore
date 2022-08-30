import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface HeaderProps {
  titleColor: string;
  title: string;
}

export const Header: React.FC<HeaderProps> = ({titleColor, title}) => {
  const styles = StyleSheet.create({
    container: {
      padding: 5,
      fontSize: 35,
      color: titleColor,
      fontWeight: '500',
    },
  });
  return (
    <View>
      <Text style={styles.container}>{title}</Text>
    </View>
  );
};
