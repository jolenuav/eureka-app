import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import _loadFonts from '../resources/fonts/LoadFonts';
import Colors from '../styles/Colors';
import StylesGeneral from '../styles/General';
import * as Animatable from 'react-native-animatable';
import RouterNavs from '../constants/Routes';

export default function Loading() {
  return (
    <LinearGradient
      colors={['#F5B411', Colors.secundary]}
      style={styles.gradient}
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

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
});
