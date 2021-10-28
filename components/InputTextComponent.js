import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const InputTextComponent = ({value, placeholderTxt, onChangeText, nameIcon}) => {
    return (
      <View style={styles.formInput}>
        <FontAwesome5 name={nameIcon} size={20} style={styles.iconAtHead} />
        <TextInput
          style={styles.input}
          placeholder={placeholderTxt}
          value={value}
          onChangeText={onChangeText}
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
    borderRadius: 5,
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
  },
});
export default InputTextComponent;