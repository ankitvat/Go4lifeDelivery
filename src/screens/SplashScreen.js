import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, Animated, Easing} from 'react-native';
import logo from '../../assets/logo.png';
import LottieView from 'lottie-react-native';

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.header}>
          <Image style={styles.tinylogo} source={logo} />
        </View>
        <LottieView
          style={styles.container}
          source={require('../../assets/splash.json')}
          autoPlay
          loop={false}
          speed={1.8}
          onAnimationFinish={() => {
            console.log('Animation Finished!');
            this.props.navigation.replace('Login');
          }}
        />
        <View style={styles.bottomHeader}>
          <Text style={{fontFamily: 'ProximaNova-Regular', fontSize: 15}}>
            Version 1.0.0
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  header: {position: 'absolute', top: '10%', alignItems: 'center'},
  bottomHeader: {top: '40%'},
  tinylogo: {
    height: 90,
    width: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
