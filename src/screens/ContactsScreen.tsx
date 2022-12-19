import {FlatList, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
// import chats from '../assets/data/chats.json';
// import {IChat} from '../types/chatTypes';
import ContactListItem from '../components/ContactListItem';
import {API, graphqlOperation} from 'aws-amplify';
import {listUsers} from '../graphql/queries';

// interface RenderData {
//   item: IChat;
// }

export default function ContactsScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUserList = async () => {
      try {
        const res: any = await API.graphql(graphqlOperation(listUsers));
        setUsers(res.data.listUsers.items);
      } catch (error) {}
    };
    getUserList();
  }, []);

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
        data={users}
        renderItem={({item}: any) => <ContactListItem user={item} />}
        keyExtractor={({item}: any) => item?.id}
      />
    </View>
  );
}
