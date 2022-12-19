import {View, StyleSheet, Button} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {Auth} from 'aws-amplify';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Header title="Settings" icon={''} />
      <View style={styles.subContainer}>
        <Button onPress={() => Auth.signOut()} title="Sign out" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
