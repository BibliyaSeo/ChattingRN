import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NotImplementedScreen from '../screens/NotImplementedScreen';
import ChatsScreen from '../screens/ChatsScreen/ChatsScreen';

// export type BottomTabsParamList = {
//     Chats: undefined;
//     Chat: {id: string; name: string};
//   };

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="Status" component={NotImplementedScreen} />
      <Tab.Screen name="Calls" component={NotImplementedScreen} />
      <Tab.Screen name="Camera" component={NotImplementedScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Settings" component={NotImplementedScreen} />
    </Tab.Navigator>
  );
}
