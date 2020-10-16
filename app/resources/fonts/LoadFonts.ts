import * as Font from 'expo-font';

let fonts = {
  'OpenSans-Bold': require('./OpenSans-Bold.ttf'),
  'OpenSans-BoldItalic': require('./OpenSans-BoldItalic.ttf'),
  'OpenSans-ExtraBold': require('./OpenSans-ExtraBold.ttf'),
  'OpenSans-ExtraBoldItalic': require('./OpenSans-ExtraBoldItalic.ttf'),
  'OpenSans-Italic': require('./OpenSans-Italic.ttf'),
  'OpenSans-Light': require('./OpenSans-Light.ttf'),
  'OpenSans-LightItalic': require('./OpenSans-LightItalic.ttf'),
  'OpenSans-Regular': require('./OpenSans-Regular.ttf'),
  'OpenSans-SemiBold': require('./OpenSans-SemiBold.ttf'),
  'OpenSans-SemiBoldItalic': require('./OpenSans-SemiBoldItalic.ttf'),

  'Roboto-Black': require('./Roboto-Black.ttf'),
  'Roboto-BlackItalic': require('./Roboto-BlackItalic.ttf'),
  'Roboto-Bold': require('./Roboto-Bold.ttf'),
  'Roboto-BoldItalic': require('./Roboto-BoldItalic.ttf'),
  'Roboto-Italic': require('./Roboto-Italic.ttf'),
  'Roboto-Light': require('./Roboto-Light.ttf'),
  'Roboto-LightItalic': require('./Roboto-LightItalic.ttf'),
  'Roboto-Medium': require('./Roboto-Medium.ttf'),
  'Roboto-MediumItalic': require('./Roboto-MediumItalic.ttf'),
  'Roboto-Regular': require('./Roboto-Regular.ttf'),
  'Roboto-Thin': require('./Roboto-Thin.ttf'),
  'Roboto-ThinItalic': require('./Roboto-ThinItalic.ttf'),
};

async function _loadFonts() {
  await Font.loadAsync(fonts);
  return true;
}

export default _loadFonts;
