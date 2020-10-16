import { StyleSheet } from 'react-native';
import Colors from './Colors';

const StylesGeneral = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imgPrincipal: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },

  imgLoading: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },

  link: {
    color: Colors.primary,
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
  },

  text: {
    color: Colors.text,
    fontFamily: 'Roboto-Regular',
  },

  title: {
    color: Colors.text,
    fontFamily: 'Roboto-Regular',
    fontSize: 40,
    marginBottom: 20,
  },

  textInput: {
    height: 40,
    borderBottomColor: Colors.light,
    borderBottomWidth: 1,
    width: '100%',
    paddingLeft: 50,
    color: Colors.black,
    fontFamily: 'Roboto-Regular',
  },

  textInputLogin: {
    backgroundColor: Colors.light,
    borderRadius: 50,
    height: 50,
    width: '100%',
    paddingLeft: 70,
    color: Colors.black,
    fontFamily: 'Roboto-Regular',
  },

  textInputLoginError: {
    borderColor: Colors.red,
    borderWidth: 1,
    backgroundColor: Colors.light,
    borderRadius: 50,
    height: 50,
    width: '100%',
    paddingLeft: 70,
    color: Colors.black,
    fontFamily: 'Roboto-Regular',
  },

  conatinerInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  iconInputLogin: {
    position: 'absolute',
    left: 30,
    color: Colors.placeholder,
  },

  containerForm: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    padding: 10,
  },
});

export default StylesGeneral;
