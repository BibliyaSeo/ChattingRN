import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

interface IHeader {
  title: string;
  iconENN?: boolean;
  iconType?: string;
  iconLocation?: string;
  icon: string;
  nav1?: string;
  nav2?: string;
}

export default function Header({
  title,
  iconENN,
  iconType,
  iconLocation,
  icon,
  nav1,
  nav2,
}: IHeader) {
  // const navigation = useNavigation<NavigationProp<BottomTabsParamList>>();
  const navigation = useNavigation();
  const color = 'royalblue';
  const transparent = 'transparent';

  const myIconType =
    iconType === 'ionicons' ? (
      <Ionicons name={icon} size={18} color={color} />
    ) : iconType === 'entypo' ? (
      <Entypo name={icon} size={18} color={color} />
    ) : null;

  const transparentIcon =
    iconType === 'ionicons' ? (
      <Ionicons name={icon} size={18} color={transparent} />
    ) : iconType === 'entypo' ? (
      <Entypo name={icon} size={18} color={transparent} />
    ) : null;

  return (
    <View style={styles.header}>
      {iconLocation === 'left' ? (
        <>
          <TouchableOpacity
            style={styles.iconLeft}
            onPress={() => navigation.navigate(nav1)}>
            {iconENN && myIconType}
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity style={styles.iconRight}>
            {iconENN && transparentIcon}
          </TouchableOpacity>
        </>
      ) : iconLocation === 'right' ? (
        <>
          <TouchableOpacity style={styles.iconLeft}>
            {iconENN && transparentIcon}
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity
            style={styles.iconRight}
            onPress={() => navigation.navigate(nav1)}>
            {iconENN && myIconType}
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            style={styles.iconLeft}
            onPress={() => navigation.navigate(nav1)}>
            {iconENN && myIconType}
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          <TouchableOpacity
            style={styles.iconRight}
            onPress={() => navigation.navigate(nav2)}>
            {iconENN && myIconType}
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 90,
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  iconLeft: {
    marginLeft: 15,
  },
  iconRight: {
    marginRight: 15,
  },
});
