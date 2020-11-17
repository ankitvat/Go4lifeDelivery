import React, { Component } from 'react';
import { View,Image,StyleSheet, Text } from 'react-native';
import logo from './assets/logo.png';
import LottieView from 'lottie-react-native';


export default class Splash extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff'
                }}
            >
            <View style = {styles.header}>
              <Image style = {styles.tinylogo} source = {logo} />

            </View>
                <LottieView
                    style = {styles.container}
                    source={require('./assets/splash.json')}
                    autoPlay
                    loop={false}
                    speed={1}
                    onAnimationFinish={() => {
                        console.log('Animation Finished!')
                        this.props.navigation.replace('Home');
                    }}
                />
              <View style = {styles.bottomHeader}>
                <Text style = {{fontFamily:'ProximaNova-Regular', fontSize:0,}}>Version 1.0.0</Text>

              </View>
            </View>

        )
    }
}

const styles = StyleSheet.create(
{
  bottomHeader:{ paddingTop:420,paddingLeft:130},
  header:{padding:60,paddingLeft:110,},
  tinylogo:{height:90,width:180,justifyContent:'center',alignItems:'center'},
}

);
