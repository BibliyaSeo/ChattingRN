import React from 'react';
import {StyleSheet, View} from 'react-native';
import Navigator from './src/navigation/Navigator';
import {Amplify} from 'aws-amplify';
import {withAuthenticator} from '@aws-amplify/ui-react-native';
import awsconfig from './src/aws-exports';

Amplify.configure({...awsconfig, Analytics: {disabled: true}});

const App = () => {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
});

export default withAuthenticator(App);
