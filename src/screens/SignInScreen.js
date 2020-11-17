import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import logo from '../../assets/logo.png';
export default function SignIn({navigation}) {
  const inputElementRef = useRef(null);
  useEffect(() => {
    inputElementRef.current.setNativeProps({
      style: {fontFamily: 'ProximaNova-Regular'},
    });
  }, []);
  const inputElementRe = useRef(null);
  useEffect(() => {
    inputElementRe.current.setNativeProps({
      style: {fontFamily: 'ProximaNova-Regular'},
    });
  }, []);

  const onPress = () => {
    navigation.navigate('Login');
  };
  const onLogin = () => {
    navigation.navigate('Login');
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
            fontSize: 20,
            color: 'grey',
          }}>
          Sign Up
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.inputX}
          placeholder="Enter Username / Phone Number"
        />
        <TextInput
          ref={inputElementRe}
          secureTextEntry
          style={styles.inputX}
          placeholder="Enter Password"
        />
        <TextInput
          ref={inputElementRef}
          secureTextEntry
          style={styles.inputX}
          placeholder="Confirm Password"
        />
      </View>
      <TouchableOpacity style={styles.submit} onPress={onPress}>
        <Text style={styles.text}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onLogin}>
        <Text
          style={{
            fontFamily: 'Proxima Nova Bold',
            color: 'grey',
            paddingVertical: '5%',
          }}>
          Already a User? Log In.
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
    marginTop: '10%',
    width: '95%',
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
    marginTop: '5%',
    alignItems: 'center',
    paddingBottom: '10%',
  },
  inputX: {
    backgroundColor: '#f5f5f5',
    width: '100%',
    padding: '5%',
    borderRadius: 10,
    marginTop: '5%',
    fontFamily: 'ProximaNova-Regular',
  },
  submit: {
    width: '90%',
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
