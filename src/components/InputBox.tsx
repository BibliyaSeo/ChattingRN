import {View, StyleSheet, TextInput, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function InputBox() {
  const [newMessage, setNewMessage] = useState('');

  const onSend = () => {
    console.log(newMessage);
    setNewMessage('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <AntDesign name="plus" size={20} color="royalblue" />
      <TextInput
        style={styles.input}
        placeholder="type your message..."
        value={newMessage}
        onChangeText={setNewMessage}
      />
      <MaterialIcons
        onPress={onSend}
        style={styles.send}
        name="send"
        size={16}
        color="white"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    borderRadius: 50,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: 'royalblue',
    padding: 7,
    borderRadius: 15,
    overflow: 'hidden',
  },
});
