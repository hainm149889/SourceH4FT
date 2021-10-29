import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import InputTextComponent from '../components/InputTextComponent';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';

const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [validateDescription, setValidateDescripton] = useState('');
  const [enableDescription, setEnableDescription] = useState(false);

  const changeTextUserName = value => {
    setUserName(value);
    setEnableDescription(false);
  };
  const changeTextPassword = value => {
    setPassword(value);
    setEnableDescription(false);
  };
  const onPressLogin = async () => {
    if (!userName.trim() || userName.length < 6) {
      setEnableDescription(true);
      setValidateDescripton('Please input username at least 6 characters!');
    } else if (!password.trim() || password.length < 3) {
      setEnableDescription(true);
      setValidateDescripton('Please input password at least 3 characters!');
    } else {
      setEnableDescription(false);
      try {
        await AsyncStorage.setItem('Username', userName);
        await AsyncStorage.setItem('Password', password);
        navigation.navigate('User');
      } catch (error) {
        console.log('error', error);
      }
    }
  };
  return (
    <>
      {enableDescription && (
        <View style={styles.viewDescription}>
          <TouchableOpacity
            style={{margin: 3, width: '10%', alignItems: 'center'}}
            onPress={() => setEnableDescription(false)}>
            <FontAwesome name="close" size={20} />
          </TouchableOpacity>
          <Text
            style={{
              color: 'red',
              fontSize: 14,
              width: '90%',
              textAlign: 'center',
            }}>
            {validateDescription}
          </Text>
        </View>
      )}
      <ImageBackground
        style={styles.container}
        source={require('../assets/bg.jpeg')}
        blurRadius={3}>
        <View style={styles.formLogin} blurRadius={5}>
          <View style={styles.headerForm}>
            <Image
              source={require('../assets/gifQues.gif')}
              resizeMode="cover"
              style={styles.iconLogin}
            />
            <Text style={styles.titleLoginForm}>Fill your heart's info</Text>
          </View>
          <View style={styles.formInputInfo}>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                marginLeft: 20,
              }}>
              <InputTextComponent
                nameIcon="user-circle"
                placeholderTxt="Username"
                onChangeText={changeTextUserName}
                value={userName}
              />
              <TouchableOpacity>
                <AntDesign
                  name="close"
                  style={{color: 'grey', marginLeft: -30, marginTop: 10}}
                  size={20}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                marginLeft: 20,
              }}>
              <InputTextComponent
                nameIcon="key"
                placeholderTxt="Password"
                state={changeTextPassword}
                value={password}
                booleanCheck={true}
              />
              <TouchableOpacity>
                <AntDesign
                  name="close"
                  style={{color: 'grey', marginLeft: -30, marginTop: 10}}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.formBtn}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.txtOfBtn}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => onPressLogin()}>
              <Text style={styles.txtOfBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewDescription: {
    width: '100%',
    paddingVertical: 7,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formLogin: {
    width: 300,
    height: 350,
  },
  headerForm: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  titleLoginForm: {
    fontSize: 26,
    color: 'white',
  },
  iconLogin: {
    height: 90,
    width: 90,
    borderRadius: 30,
  },
  formInputInfo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  formBtn: {
    flexDirection: 'row',
    marginHorizontal: 5,
    width: 300,
  },
  btn: {
    width: 135,
    backgroundColor: 'white',
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  txtOfBtn: {
    textAlign: 'center',
    fontSize: 14,
  },
});

export default LoginScreen;
