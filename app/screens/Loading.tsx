import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-navigation';
import Colors from '../styles/Colors';
import StylesGeneral from '../styles/General';

export default function Loading() {
  return (
    <LinearGradient
      colors={['#F5B411', Colors.secundary]}
      style={{ ...StyleSheet.absoluteFillObject, height:'100%', zIndex: 9999 }}
    >
      <SafeAreaView style={StylesGeneral.containerPrincipal}>
        <Animatable.Image
          animation='pulse'
          easing='ease-in-out'
          iterationCount='infinite'
          style={StylesGeneral.imgLoading}
          source={require('../resources/images/logo-eureka.png')}
        />
      </SafeAreaView>
    </LinearGradient>
  );
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
});
