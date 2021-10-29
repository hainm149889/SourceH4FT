import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ScreenA = ({navigation}) => {

  const [nameUser, setNameUser] = useState('');

  const onPressHandler = () => {
    navigation.navigate('User', {ItemID: '1', ItemName: 'Item from screen A'});
  };

  useEffect(() => {
    getDataFromLogin();
  }, []);

  const getDataFromLogin = () => {
    try {
      AsyncStorage.getItem('Username').then(
        value => {
          if(value !== null){
            setNameUser(value);
          }
        }
      )
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Welcome {nameUser} to your app!</Text>
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          backgroundColor: 'red',
          borderRadius: 5,
          margin: 10,
        }}
        onPress={onPressHandler}>
        <Text>Go to Screen B</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ScreenA;