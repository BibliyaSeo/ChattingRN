import React from 'react';
import chats from '../../assets/data/chats.json';
import {FlatList, View} from 'react-native';
import ChatListItem from '../../components/ChatListItem';
import {IChat} from '../../types/chatTypes';
import Header from '../../components/Header';

interface RenderData {
  item: IChat;
}

export default function ChatsScreen() {
  return (
    <View style={{backgroundColor: 'white'}}>
      <Header
        title={'Chats'}
        iconENN={true}
        iconType="entypo"
        iconLocation="right"
        icon={'new-message'}
      />
      <FlatList
        data={chats}
        renderItem={({item}: RenderData) => <ChatListItem chat={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
