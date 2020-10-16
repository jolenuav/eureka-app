import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Colors from '../styles/Colors';

interface SlideProps {
  label: string;
  right: boolean;
}

export default function SlideLogin({ label, right }: SlideProps) {
  const { width, height } = Dimensions.get('window');
  const SLIDE_HEIGHT = 0.65 * height;
  const styles = StyleSheet.create({
    title: {
      fontSize: 80,
      lineHeight: 80,
      fontFamily: 'Roboto-Bold',
      color: Colors.white,
      textAlign: 'center',
    },
    titleContainer: {
      height: 100,
      justifyContent: 'center',
      transform: [
        { translateY: (SLIDE_HEIGHT - 100) / 2 },
        { translateX: right ? width / 2 - 50 : -width / 2 + 50 },
        { rotate: right ? '-90deg' : '90deg' },
      ],
    },
  });

  return (
    <View style={{ width }}>
      <View style={[styles.titleContainer]}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </View>
  );
}
