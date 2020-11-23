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

export default function Login({navigation}) {
  const [value, onChangeText] = useState('');
  const inputElementRef = useRef(null);
  useEffect(() => {
    inputElementRef.current.setNativeProps({
      style: {fontFamily: 'ProximaNova-Regular'},
    });
  }, []);
  const [pass, setPass] = useState('');

  const onPress = () => {
    navigation.navigate('Home');
  };
  const onForgot = () => {
    navigation.navigate('Forgot');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.tinylogo} source={logo} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.inputX}
          underlineColorAndroid="transparent"
          placeholder="Enter Username / Phone Number"
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
        <TextInput
          ref={inputElementRef}
          secureTextEntry
          style={styles.inputX}
          placeholder="Enter Password"
        />
      </View>

      <TouchableOpacity style={styles.submit} onPress={onPress}>
        <Text style={styles.text}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity onPress={onForgot}>
          <Text
            style={{
              fontFamily: 'Proxima Nova Bold',
              color: 'grey',
              marginLeft: '15%',
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
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
  header: {position: 'absolute', top: '10%', alignItems: 'center'},
  tinylogo: {
    height: 90,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
  },
  form: {
    width: '90%',
    alignItems: 'center',
    marginTop: '15%',
  },
  inputX: {
    backgroundColor: '#f5f5f5',
    width: '100%',
    padding: '5%',
    borderRadius: 10,
    fontFamily: 'ProximaNova-Regular',
    marginTop: '5%',
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
    color: 'white',
    textTransform: 'uppercase',

    margin: '5%',
    borderRadius: 10,
    fontFamily: 'ProximaNova-Regular',
    padding: '2%',
  },
  footer: {
    marginTop: '10%',
  },
});
