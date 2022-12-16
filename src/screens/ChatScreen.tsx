import React from 'react';
import ChatListItem from '../components/ChatListItem';
import chats from '../assets/data/chats.json';
// import {IChat} from '../types/chatTypes';
import {ScrollView} from 'react-native';
import {IChat} from '../types/chatTypes';

export default function ChatScreen() {
  return (
    <ScrollView>
      {chats.map((data: IChat) => (
        <ChatListItem chat={data} />
      ))}
    </ScrollView>
  );
}
