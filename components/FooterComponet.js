import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

AntDesign.loadFont();
MaterialCommunityIcons.loadFont();

const FooterComponent = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.icon}>
          <AntDesign name="facebook-square" size={50} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <AntDesign name="instagram" size={53} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <MaterialCommunityIcons name="gmail" size={60} />
        </TouchableOpacity>
        <Text style={styles.fbIcon}>Created by HaiNM14</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  footer: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
      margin: 5,
  },
  fbIcon: {
    fontSize: 20,
  },
});
export default FooterComponent;