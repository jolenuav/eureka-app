import { Feather } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import Colors from '../styles/Colors';
import StylesGeneral from '../styles/General';

export default function Profile(props: any) {
  const { item } = props.route.params;
  return (
    <SafeAreaView
      style={[
        StylesGeneral.containerPrincipal,
        { backgroundColor: Colors.secundary },
      ]}
    >
      <View
        style={{
          borderRadius: 50,
          borderWidth: 2,
          borderColor: Colors.white,
        }}
      >
        <SharedElement id={item.id}>
          <Feather name='user' size={30} color={Colors.white} />
        </SharedElement>
      </View>
      <View
        style={{
          height: '50%',
          width: '90%',
          backgroundColor: Colors.light2,
          marginTop: 20,
        }}
      >
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
}

Profile.sharedElements = (route: any, otherRoute: any, showing: any) => {
  const { item } = route.params;
  console.log(item);
  return [item.id];
};
