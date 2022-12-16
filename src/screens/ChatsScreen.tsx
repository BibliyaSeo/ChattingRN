import React from 'react';
import ChatListItem from '../components/ChatListItem';
import chats from '../assets/data/chats.json';
import {FlatList} from 'react-native';
import {IChat} from '../types/chatTypes';

interface RenderData {
  item: IChat;
}

export default function ChatsScreen() {
  return (
    <FlatList
      data={chats}
      renderItem={({item}: RenderData) => <ChatListItem chat={item} />}
      keyExtractor={item => item.id}
    />
  );
}
