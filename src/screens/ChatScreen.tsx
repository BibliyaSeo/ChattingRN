import {ImageBackground, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import Message from '../components/Message';
import messages from '../assets/data/messages.json';
import {IMessage} from '../types/chatTypes';

export default function ChatScreen() {
  interface RenderData {
    item: IMessage;
  }

  return (
    <ImageBackground
      source={require('../assets/images/BG.png')}
      style={styles.bg}>
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={({item}: RenderData) => <Message message={item} />}
        style={styles.list}
        inverted
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {padding: 10},
});
