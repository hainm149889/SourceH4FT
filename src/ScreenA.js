import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Keyboard,
  Image,
  ImageBackground,
} from 'react-native';

const ScreenA = ({navigation}) => {
  const onPressHandler = () => {
    navigation.navigate('User', {ItemID: '1', ItemName: 'Item from screen A'});
  };
  return (
    <View style={styles.container}>
      <Text>Screen A</Text>
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