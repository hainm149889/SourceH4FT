import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeaderComponent = ({titlePage}) => {
    return(
        <View style={styles.header}>
            <Text style={styles.titlePage}>{titlePage}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  header: {
    flex: 0.25,
    marginTop: 60,
    justifyContent: 'center',
  },
  titlePage: {
    fontWeight: '700',
    fontSize: 28,
  },
});
export default HeaderComponent;