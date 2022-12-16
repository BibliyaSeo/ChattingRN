import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ChatScreen from './src/screens/ChatScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ChatScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',

    paddingVertical: 50,
  },
});

export default App;
