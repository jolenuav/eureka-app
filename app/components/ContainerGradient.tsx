import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

interface GradientProps {
  children: any;
  colors: any[];
  stylesProp: any;
}
export default function ContainerGradient({
  children,
  colors,
  stylesProp,
}: GradientProps) {
  return (
    <LinearGradient colors={colors} style={stylesProp.gradient}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
});
