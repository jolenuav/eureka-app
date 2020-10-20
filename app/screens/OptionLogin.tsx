import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import ContainerGradient from '../components/ContainerGradient';
import RouterNavs from '../constants/Routes';
import Colors from '../styles/Colors';
import StylesGeneral from '../styles/General';

export default function OptionLogin({ navigation }: any) {
  const stylesGradient = StyleSheet.create({
    gradient: {
      flex: 1,
    },
  });

  return (
    <ContainerGradient
      colors={[Colors.light, Colors.white]}
      stylesProp={stylesGradient}
    >
      <SafeAreaView style={StylesGeneral.containerPrincipal}>
        <Image
          style={StylesGeneral.imgPrincipal}
          source={require('../resources/images/isologo-eureka.png')}
        />
        <Text style={StylesGeneral.text}>Continuar con</Text>

        <TouchableHighlight
          onPress={() => {
            navigation.navigate(RouterNavs.LOGIN);
          }}
          underlayColor='transparent'
        >
          <View style={styles.textGoogle}>
            <AntDesign
              style={{ marginTop: 10 }}
              name='google'
              size={32}
              color={Colors.blue}
            />
            <Text style={{ fontSize: 30, color: Colors.blue, paddingTop: 5 }}>
              oogle
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={{ marginTop: 100 }}
          onPress={() => {
            navigation.navigate(RouterNavs.REGISTER);
          }}
          underlayColor='transparent'
        >
          <Text style={StylesGeneral.link}>Regístrate</Text>
        </TouchableHighlight>

        <View style={{ marginTop: 10, flexDirection: 'row' }}>
          <Text style={[StylesGeneral.text, { paddingRight: 10 }]}>
            ¿Ya tienes una cuenta?
          </Text>

          <TouchableHighlight
            onPress={() => {
              navigation.navigate(RouterNavs.LOGIN);
            }}
            underlayColor='transparent'
          >
            <Text style={StylesGeneral.link}>Iniciar sesión</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </ContainerGradient>
  );
}

const styles = StyleSheet.create({
  textGoogle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    fontFamily: 'OpenSans-Regular',
  },
});
