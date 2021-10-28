import React, { useState } from "react";
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ModalWarningComponent = ({modalIsVisible, setModalIsVisible, typeOfModal, contents}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalIsVisible}
      onRequestClose={() => setModalIsVisible(false)}>
      <View style={styles.viewModal}>
        <View style={styles.detailContentModal}>
          <View style={styles.titleModal}>
            <Image
              style={{height: 30, width: 30, margin: 5}}
              source={require('../assets/warning_icon.png')}
            />
            <Text style={styles.txtTitleModal}>{typeOfModal}</Text>
          </View>
          <View style={styles.mainContentModal}>
            <Text style={styles.txtMainContentModal}>
              {contents}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.footerModal}
            onPress={() => setModalIsVisible(false)}>
            <Text style={styles.txtCloseModal}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({

  viewModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailContentModal: {
    backgroundColor: 'white',
    width: 320,
    height: 200,
    borderRadius: 20,
  },
  titleModal: {
    flexDirection: 'row',
    backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  mainContentModal: {
    height: 120,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtMainContentModal: {
    fontSize: 24,
    textAlign: 'center',
  },
  footerModal: {
    backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  txtTitleModal: {
    fontWeight: '700',
    fontSize: 26,
    color: 'yellow',
  },
  txtCloseModal: {
    fontSize: 24,
    fontWeight: '700',
  },
});
export default ModalWarningComponent;