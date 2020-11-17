import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import logo from '../../assets/logo.png';

export default function Dashboard({navigation}) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.headerlogo} source={logo} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: '5%',
  },
  headerlogo: {
    height: 50,
    width: 100,
    marginLeft: '8%',
  },
});
