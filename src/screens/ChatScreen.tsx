import {
  ImageBackground,
  StyleSheet,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';
import Message from '../components/Message';
import messages from '../assets/data/messages.json';
import {IMessage} from '../types/chatTypes';
import InputBox from '../components/InputBox';
import {StatusBar} from 'react-native';
import {useRoute} from '@react-navigation/native';
import Header from '../components/Header';

interface RenderData {
  item: IMessage;
}

interface IParams {
  params: {id: string; name: string};
}

export default function ChatScreen() {
  const {
    params: {id, name},
  }: IParams = useRoute<any>();

  return (
    <>
      <Header title={name} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={
          Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
        }
        style={styles.bg}>
        <ImageBackground
          source={require('../assets/images/BG.png')}
          style={styles.bg}>
          <FlatList
            data={messages}
            keyExtractor={item => item.id}
            renderItem={({item}: RenderData) => <Message message={item} />}
            style={styles.list}
            inverted
          />
          <InputBox />
        </ImageBackground>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  list: {padding: 10},
});
