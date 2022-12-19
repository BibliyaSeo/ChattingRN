import {FlatList, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import chats from '../assets/data/chats.json';
import {IChat} from '../types/chatTypes';
import ContactListItem from '../components/ContactListItem';

interface RenderData {
  item: IChat;
}

export default function ContactsScreen() {
  return (
    <View>
      <Header
        title={'Contacts'}
        iconENN={true}
        iconType="ionicons"
        iconLocation="left"
        icon={'chevron-back'}
        nav1={'Chats'}
      />
      <FlatList
        data={chats}
        renderItem={({item}: RenderData) => (
          <ContactListItem user={item.user} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
