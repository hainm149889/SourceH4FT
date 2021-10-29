import React, {useState} from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';

const InputTextComponent = ({value, placeholderTxt, onChangeText, nameIcon, booleanCheck}) => {

  return (
      <View style={styles.formInput}>
        <FontAwesome5 name={nameIcon} size={20} style={styles.iconAtHead} />
        <TextInput
          style={styles.input}
          placeholder={placeholderTxt}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={booleanCheck}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  formInput:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 20,
  },
  iconAtHead:{
    margin: 10,
  },
  input: {
    backgroundColor: 'white',
    width: '80%',
    paddingVertical: 12,
    borderRadius: 5,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
});
export default InputTextComponent;