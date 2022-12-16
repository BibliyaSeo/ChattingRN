import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChatsScreen from '../screens/ChatsScreen/ChatsScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import MainTabNavigator from './MainTabNavigator';

export type RootStackParamList = {
  Home: undefined;
  Chats: undefined;
  Chat: {id: string; name: string};
};

const Stack = createStackNavigator<RootStackParamList>();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={MainTabNavigator} />
        <Stack.Screen name="Chats" component={ChatsScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
