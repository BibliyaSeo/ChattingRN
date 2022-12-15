import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import ChatListItem from './src/components/ChatListItem';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ChatListItem />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
