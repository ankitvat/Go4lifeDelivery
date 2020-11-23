import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {Surface, Shape} from '@react-native-community/art';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import logo from '../../assets/logo.png';

export default function Dashboard({navigation}) {
  const onPress = () => {
    navigation.navigate('Login');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={onPress}>
            <FontAwesomeIcon icon={faArrowLeft} size={22} style={{flex: 1}} />
          </TouchableOpacity>
        </View>
        <Image style={styles.headerlogo} source={logo} />
        <View style={styles.rightlogo}>
          <FontAwesomeIcon icon={faUserCircle} size={30} color={'#a3a3a3'} />
        </View>

        <View style={styles.progress}></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '5%',
  },

  rightlogo: {
    alignItems: 'flex-end',
    marginTop: '-11.5%',
  },

  headerlogo: {
    height: 50,
    width: 100,
    marginLeft: '8%',
    marginTop: '-8%',
  },
});
