import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Header from '../components/Header';

const NotImplementedScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Not Implemented" icon={''} />
      <View style={styles.subContainer}>
        <Text style={styles.text}>Not Implemented!</Text>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/capybara+copy.png',
          }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'gray',
  },
  image: {
    width: '80%',
    aspectRatio: 2 / 1,
  },
});

export default NotImplementedScreen;
