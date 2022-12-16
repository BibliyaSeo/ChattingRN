import React from 'react';
import ChatListItem from '../components/ChatListItem';
import chats from '../assets/data/chats.json';
import {FlatList} from 'react-native';
import {IChat} from '../types/chatTypes';
import Header from '../components/Header';

interface RenderData {
  item: IChat;
}

export default function ChatsScreen() {
  return (
    <>
      <Header title={'Chats'} />
      <FlatList
        data={chats}
        renderItem={({item}: RenderData) => <ChatListItem chat={item} />}
        keyExtractor={item => item.id}
      />
    </>
  );
}
