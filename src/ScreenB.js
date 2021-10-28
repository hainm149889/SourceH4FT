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

const ScreenB = ({navigation, route}) => {
  const {ItemID, ItemName} = route.params;

  const onPressGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text>Screen B</Text>
      <TouchableOpacity
        style={{
          paddingVertical: 10,
          backgroundColor: 'red',
          borderRadius: 5,
          margin: 10,
        }}
        onPress={onPressGoBack}>
        <Text>Go to Screen A</Text>
      </TouchableOpacity>
      <Text>id: {ItemID}</Text>
      <Text>name: {ItemName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScreenB;
