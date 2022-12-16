import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface IHeader {
  title: string;
}

export default function Header({title}: IHeader) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
});
