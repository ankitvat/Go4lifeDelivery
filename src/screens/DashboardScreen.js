import React from 'react';
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
    height: 90,
    width: 180,
  },
});
