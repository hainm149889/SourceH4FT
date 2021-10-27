import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  Alert,
  Modal,
} from 'react-native';

const App = () => {

  const [currentName, setCurrentName] = useState('HaiNM14');
  const [sessionObj, setSessionObj] = useState({id: 6, nameObj: 'Test'});
  const changeNameCurrent = () => {
    setCurrentName('My full name is Ngo Minh Hai');
    setSessionObj({id: 1, nameObj: 'Tested'});
  };
  const [isSubmit, setIsSubmit] = useState(false);
  const [changeValue, setChangeValue] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);

  const changeValueInput = value => {
    setChangeValue(value);
    setIsSubmit(false);
  };
  const openModalWarning = () => {
    setShowModal(true);
  };
  const onSubmit = () => {
    if (!changeValue.trim()) {
      openModalWarning();
      return;
    }
    setIsSubmit(true);
    setDescription('You registed in app with name is: ' + changeValue);
  };
  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.header}>
        <Text style={styles.titlePage}>Welcome to your APP</Text>
      </View>
      <View style={styles.contents}>
        <Text style={styles.txtMainContent}>{currentName}</Text>
        <Text style={styles.testSession}>
          You change session with id {sessionObj.id} of {sessionObj.nameObj}
        </Text>
        <TouchableOpacity
          style={styles.btnCheckChange}
          onPress={changeNameCurrent}>
          <Text style={styles.txtCheckChange}>Check change</Text>
        </TouchableOpacity>
        <Text style={styles.plzInput}>Please input your name below</Text>
        <TextInput
          backgroundColor="white"
          width="80%"
          paddingVertical={12}
          borderRadius={5}
          paddingHorizontal={14}
          placeholder={'e.g.Hainm14'}
          value={changeValue}
          onChangeText={changeValueInput}
        />
        <TouchableOpacity style={styles.btnCheckChange} onPress={onSubmit}>
          <Text style={styles.txtCheckChange}>Submit</Text>
        </TouchableOpacity>
        {isSubmit ? (
          <Text style={{marginTop: 10, color: 'red'}}> {description}</Text>
        ) : null}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(false)}>
          <View style={styles.viewModal}>
            <View style={styles.detailContentModal}>
              <View style={styles.titleModal}>
                <Text style={styles.txtTitleModal}>WARNING!</Text>
              </View>
              <View style={styles.mainContentModal}>
                <Text style={styles.txtMainContentModal}>Something is wrong! Please input again!</Text>
              </View>
              <TouchableOpacity style={styles.footerModal} onPress={() => setShowModal(false)}>
                <Text style={styles.txtCloseModal}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
  },
  header: {
    flex: 0.25,
    marginTop: 60,
    justifyContent: 'center',
  },
  titlePage: {
    fontWeight: '700',
    fontSize: 28,
  },
  contents: {
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
  },
  txtMainContent: {
    fontSize: 24,
  },
  testSession: {
    marginTop: 5,
    fontSize: 14,
    color: 'red',
  },
  btnCheckChange: {
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: 'yellow',
    marginHorizontal: '20%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtCheckChange: {
    fontSize: 16,
    fontWeight: '600',
  },
  plzInput: {
    marginTop: 15,
    fontSize: 20,
  },
  footer: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
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

export default App;
