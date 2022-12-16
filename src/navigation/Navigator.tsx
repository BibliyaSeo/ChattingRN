import React from 'react';
import ChatScreen from '../screens/ChatScreen';
import ChatsScreen from '../screens/ChatsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export type RootStackParamList = {
  Chats: undefined;
  Chat: {id: string; name: string};
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Chats"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Chats" component={ChatsScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
