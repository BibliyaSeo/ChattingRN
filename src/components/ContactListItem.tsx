import {Text, StyleSheet, Image, Pressable, View} from 'react-native';
import React from 'react';

interface ContactListItemProps {
  user: {
    id: string;
    image?: string;
    name: string;
    status?: string;
  };
}

export default function ContactListItem({user}: ContactListItemProps) {
  return (
    <Pressable style={styles.container}>
      <Image
        source={{
          uri: user.image,
        }}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text numberOfLines={1} style={styles.name}>
          {user.name}
        </Text>
        <Text numberOfLines={2} style={styles.subTitle}>
          {user.status}
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
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {fontWeight: 'bold'},
  content: {flex: 1},
  subTitle: {
    color: 'gray',
  },
});
