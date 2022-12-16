import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import {IMessage} from '../types/chatTypes';
import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

interface MessageProps {
  message: IMessage;
}

export default function Message({message}: MessageProps) {
  const isMyMessage = () => {
    return message.user.id === 'u1';
  };

  const messageStyle: ViewStyle = {
    backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
    alignSelf: isMyMessage() ? 'flex-end' : 'flex-start',
  };

  return (
    <View style={[styles.container, messageStyle]}>
      <Text>{message.text}</Text>
      <Text style={styles.time}>{dayjs(message.createdAt).fromNow(true)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  time: {
    color: 'gray',
    alignSelf: 'flex-end',
  },
});
