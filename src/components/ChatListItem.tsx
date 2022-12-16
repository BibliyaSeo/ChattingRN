import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {IChat} from '../types/chatTypes';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/Navigator';
dayjs.extend(relativeTime);

interface ChatListItemProps {
  chat: IChat;
}

export default function ChatListItem({chat}: ChatListItemProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Chat', {id: chat.id, name: chat.user.name})
      }
      style={styles.container}>
      <Image
        source={{
          uri: chat.user.image,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text numberOfLines={1} style={styles.name}>
            {chat.user.name}
          </Text>
          <Text style={styles.subTitle}>
            {dayjs(chat.lastMessage.createdAt).fromNow(true)}
          </Text>
        </View>
        <Text numberOfLines={2} style={styles.subTitle}>
          {chat.lastMessage.text}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,

    height: 70,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
  },
  row: {flexDirection: 'row', marginBottom: 5},
  name: {flex: 1, fontWeight: 'bold'},
  subTitle: {color: 'gray'},
});
