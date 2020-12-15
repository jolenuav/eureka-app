import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import React, { Fragment } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import { View } from 'react-native-animatable';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import { useDispatch } from 'react-redux';
import RouterNavs from '../constants/Routes';
import UserRepository from '../firebase/Reposirties/UserRepository';
import {
  authenticationSaveMail,
  authenticationSaveToken,
} from '../redux/authentication/AuthenticationDuck';
import Colors from '../styles/Colors';
import StylesGeneral from '../styles/General';
import Loading from './Loading';

export default function Register({ navigation }: any) {
  const { control, handleSubmit, setValue, errors } = useForm();
  const [userRepository] = React.useState(new UserRepository());
  const [showLoading, setShowLoading] = React.useState(false);
  const [showSpinner, setShowSpinner] = React.useState(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const dispatch = useDispatch();

  const validMail = async (value: any) => {
    const users = await userRepository.findByMail(value);
    if (users && users.length > 0) {
      return false;
    }
    return true;
  };

  const Register = async (data: any) => {
    console.log(data);
    setShowSpinner(true);
    try {
      const users = await userRepository.findByMail(data.mail);
      console.log(users);
      if (users && users.length > 0) {
        setShowSpinner(false);
      } else {
        setShowSpinner(false);
        setShowLoading(true);
        setTimeout(() => {
          setShowLoading(false);
          dispatch(authenticationSaveMail(data.mail));
          dispatch(authenticationSaveToken('true'));
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
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
        {showSpinner ? (
          <ActivityIndicator
            style={{ ...StyleSheet.absoluteFillObject, zIndex: 9999 }}
            size='large'
            color={Colors.secundary}
          />
        ) : (
          <Fragment />
        )}
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
              <Text style={StylesGeneral.title}>Regístrate en eureka!</Text>
              <View style={[StylesGeneral.conatinerInput, { marginTop: 30 }]}>
                <Controller
                  control={control}
                  name='name'
                  rules={{ required: true }}
                  defaultValue=''
                  render={({ onChange, onBlur, value }: any) => (
                    <TextInput
                      style={
                        errors.name
                          ? StylesGeneral.textInputLoginError
                          : StylesGeneral.textInputLogin
                      }
                      placeholderTextColor={Colors.placeholder}
                      placeholder='Nombre'
                      onBlur={onBlur}
                      onChangeText={(value) => onChange(value)}
                      value={value}
                    />
                  )}
                />
                <FontAwesome
                  name='user'
                  size={32}
                  style={StylesGeneral.iconInputLogin}
                />
              </View>
              <View style={StylesGeneral.conatinerInput}>
                <Controller
                  control={control}
                  name='mail'
                  rules={{
                    required: true,
                    validate: async (value) => await validMail(value),
                  }}
                  defaultValue=''
                  render={({ onChange, onBlur, value }: any) => (
                    <TextInput
                      style={
                        errors.mail
                          ? StylesGeneral.textInputLoginError
                          : StylesGeneral.textInputLogin
                      }
                      textContentType='emailAddress'
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
                style={[styles.btnLogin, { marginTop: 60 }]}
                onPress={handleSubmit(Register)}
                underlayColor='transparent'
              >
                <Text
                  style={{ color: Colors.white, fontFamily: 'Roboto-Bold' }}
                >
                  Regístrate
                </Text>
              </TouchableHighlight>

              <View style={{ marginTop: 20, flexDirection: 'row' }}>
                <Text style={StylesGeneral.text}>
                  ¿Ya tienes una cuenta de usuario?{' '}
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
    borderBottomRightRadius: 75,
    height: '20%',
  },
  containerForm: {
    flex: 1,
    borderBottomRightRadius: 75,
    borderBottomLeftRadius: 75,
    borderTopLeftRadius: 75,
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
