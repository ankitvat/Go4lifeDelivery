import React, {useState, useEffect, useRef} from 'react';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import logo from '../../assets/logo.png';
export default function NewPass({navigation}) {
  const inputElementRef = useRef(null);
  useEffect(() => {
    inputElementRef.current.setNativeProps({
      style: {fontFamily: 'ProximaNova-Regular'},
    });
  }, []);
  const onPress = () => {
    navigation.navigate('Login');
  };
  const onLogin = () => {
    navigation.navigate('Login');
  };
  const onForgot = () => {
    navigation.navigate('Forgot');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.tinylogo} source={logo} />
      </View>
      <View style={styles.content}>
        <Text
          style={{
            fontFamily: 'Proxima Nova Bold',
            alignItems: 'center',
            position: 'absolute',
            top: '-170%',
            right: '28%',
          }}>
          Reset Your Password
        </Text>
        <Text style={styles.contentStyle}>Enter One-Time Password</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          ref={inputElementRef}
          style={styles.inputX}
          secureTextEntry
          placeholder="Enter OTP"
        />
      </View>
      <TouchableOpacity style={styles.otp} onPress={onLogin}>
        <Text style={styles.otpX}>Validate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onForgot}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: '4%',
        }}>
        <FontAwesomeIcon icon={faArrowLeft} style={{marginTop: '9.5%'}} />
        <Text
          style={{
            fontFamily: 'Proxima Nova Bold',
            paddingTop: '9.5%',
            borderBottomWidth: 1,
          }}>
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    fontFamily: 'ProximaNova-Regular',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '9%',
    width: '95%',
    marginTop: '20%',
  },
  contentStyle: {
    fontFamily: 'Proxima Nova Bold',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '1.5%',
    marginRight: '2%',
  },
  otpX: {
    borderWidth: 1,
    borderRadius: 10,
    padding: '3.2%',
    paddingHorizontal: '10%',
    fontFamily: 'ProximaNova-Regular',
  },
  header: {position: 'absolute', top: '10%', alignItems: 'center'},
  tinylogo: {
    height: 90,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '90%',
    alignItems: 'center',
    paddingBottom: '10%',
  },
  inputX: {
    backgroundColor: '#f5f5f5',
    width: '100%',
    padding: '5%',
    borderRadius: 10,
    fontFamily: 'ProximaNova-Regular',
  },
  submit: {
    width: '90%',
    marginTop: '10%',
    backgroundColor: '#09683C',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 17,
    alignItems: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    color: 'white',
    margin: '5%',
    borderRadius: 10,
    fontFamily: 'ProximaNova-Regular',
    padding: '2%',
  },
  footer: {
    marginTop: '10%',
  },
});
