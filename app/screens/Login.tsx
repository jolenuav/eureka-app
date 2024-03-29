import {
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Dimensions, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { View } from 'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-navigation';
import UserRepository from '../firebase/Reposirties/UserRepository';
import Colors from '../styles/Colors';
import StylesGeneral from '../styles/General';
import Loading from './Loading';

export default function Login({ navigation }: any) {
  const { control, handleSubmit, setValue, errors } = useForm();
  const [userRepository] = React.useState(new UserRepository());
  const [showLoading, setShowLoading] = React.useState(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);

  const login = async (data: any) => {
    console.log('Iniciar sesion', data);
    setShowLoading(true);
    const resp = await userRepository.getUserByLogin(data.mail, data.password);
    console.log('RESPUESTA', resp);
    console.log(resp ? 'Se inició' : 'falló');
    setShowLoading(false);
  };
  const forgotPassword = () => {
    console.log('Olvidaste tu contraseña');
  };

  if (showLoading) {
    return <Loading />;
  } else {
    return (
      <SafeAreaView
        style={{
          ...StyleSheet.absoluteFillObject,
          height,
          flex: 1,
          backgroundColor: 'white',
        }}
      >
        <View style={styles.banner}>
          <View style={StylesGeneral.containerPrincipal}>
            <Text
              style={{
                fontFamily: 'Roboto-Regular',
                fontWeight: 'bold',
                fontSize: 70,
                color: Colors.black,
              }}
            >
              eureka!
            </Text>
          </View>
        </View>
        <View style={{ height: '65%' }}>
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: Colors.light,
              height: '50%',
            }}
          />
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: Colors.black,
              marginTop: '50%',
              height: '100%',
            }}
          />
          <View style={styles.containerForm}>
            <View style={StylesGeneral.containerForm}>
              <Text
                style={[
                  StylesGeneral.link,
                  { position: 'absolute', left: 10, top: 10, zIndex: 100 },
                ]}
              >
                Regístrate
              </Text>
              <Text style={StylesGeneral.title}>Iniciar sesión</Text>
              <View style={[StylesGeneral.conatinerInput, { marginTop: 30 }]}>
                <Controller
                  control={control}
                  name='mail'
                  rules={{ required: true }}
                  defaultValue=''
                  render={({ onChange, onBlur, value }: any) => (
                    <TextInput
                      style={
                        errors.mail
                          ? StylesGeneral.textInputLoginError
                          : StylesGeneral.textInputLogin
                      }
                      placeholderTextColor={Colors.placeholder}
                      placeholder='Correo electrónico'
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                    />
                  )}
                />
                <MaterialIcons
                  name='mail'
                  size={32}
                  style={StylesGeneral.iconInputLogin}
                />
              </View>
              <View style={StylesGeneral.conatinerInput}>
                <Controller
                  control={control}
                  name='password'
                  rules={{ required: true }}
                  defaultValue=''
                  render={({ onChange, onBlur, value }: any) => (
                    <TextInput
                      textContentType='password'
                      autoCompleteType='password'
                      secureTextEntry={secureTextEntry}
                      style={
                        errors.password
                          ? StylesGeneral.textInputLoginError
                          : StylesGeneral.textInputLogin
                      }
                      placeholderTextColor={Colors.placeholder}
                      placeholder='Contraseña'
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                    />
                  )}
                />
                <FontAwesome
                  name='lock'
                  size={32}
                  style={StylesGeneral.iconInputLogin}
                />
                <TouchableHighlight
                  style={{
                    position: 'absolute',
                    right: 30,
                  }}
                  underlayColor='transparent'
                  onPress={() => {
                    setSecureTextEntry(!secureTextEntry);
                  }}
                >
                  {secureTextEntry ? (
                    <MaterialCommunityIcons
                      name='eye-off'
                      size={32}
                      style={{ color: Colors.placeholder }}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name='eye'
                      size={32}
                      style={{ color: Colors.primary }}
                    />
                  )}
                </TouchableHighlight>
              </View>

              <TouchableHighlight
                style={{ marginTop: 20 }}
                onPress={forgotPassword}
                underlayColor='transparent'
              >
                <Text style={StylesGeneral.link}>Olvidaste tu contraseña</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={[styles.btnLogin, { marginTop: 60 }]}
                onPress={handleSubmit(login)}
                underlayColor='transparent'
              >
                <Text
                  style={{ color: Colors.white, fontFamily: 'Roboto-Bold' }}
                >
                  Iniciar sesión
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
        <View style={styles.footer}></View>
      </SafeAreaView>
    );
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  banner: {
    backgroundColor: Colors.light,
    borderBottomLeftRadius: 75,
    height: '20%',
  },
  containerForm: {
    flex: 1,
    borderBottomRightRadius: 75,
    borderBottomLeftRadius: 75,
    borderTopRightRadius: 75,
    backgroundColor: Colors.white,
  },
  footer: {
    flex: 1,
    backgroundColor: Colors.black,
    height: '15%',
  },

  btnLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    width: 200,
    height: 40,
    borderRadius: 50,
  },
});
