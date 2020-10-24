import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Animated,
  Dimensions,
  PanResponder,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Colors from '../styles/Colors';
import StylesGeneral from '../styles/General';
import CafeDolceSvg from '../svg/CafeDolceSvg';
import DeliverySvg from '../svg/DeliverySvg';
import DrinksSvg from '../svg/DrinksSvg';
import KioskSvg from '../svg/KioskSvg';
import MallSvg from '../svg/MallSvg';
import MarketSvg from '../svg/MarketSvg';
import PharmacySvg from '../svg/PharmacySvg';
import RestaurantsSvg from '../svg/RestaurantsSvg';

const { width, height } = Dimensions.get('window');
export const BottomSheet = () => {
  const perceteageHeight = height * 0.1;
  const [cardHeight] = React.useState(height - perceteageHeight);
  const bsStyles = StyleSheet.create({
    card: {
      alignItems: 'center',
      backgroundColor: Colors.light2,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      bottom: perceteageHeight,
      left: 0,
      paddingHorizontal: 24,
      position: 'absolute',
      right: 0,
    },
    containerIndicador: {
      alignItems: 'center',
      position: 'absolute',
      borderWidth: 0.5,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      borderColor: Colors.light2,
      height: 50,
      borderRadius: 10,
      width,
    },
    indicator: {
      marginTop: 10,
      backgroundColor: Colors.grey2,
      height: 3,
      borderRadius: 5,
      width: 80,
    },
  });
  const animateOut = () => {
    Animated.timing(backdropOpacity, {
      useNativeDriver: true,
      toValue: 0,
    }).start();
    Animated.timing(cardBottom, {
      useNativeDriver: true,
      toValue: height - 100,
    }).start();
  };
  const animateIn = () => {
    Animated.timing(backdropOpacity, {
      useNativeDriver: true,
      toValue: 1,
    }).start();
    Animated.timing(cardBottom, {
      useNativeDriver: true,
      toValue: 100,
    }).start();
  };
  const backdropOpacity = new Animated.Value(0);
  const cardBottom = new Animated.Value(height - 100);
  const initV = 0;
  const endV = 0;
  const panResponse = PanResponder.create({
    onMoveShouldSetPanResponder: (_, gestureState) => {
      return true;
    },
    onPanResponderMove: (_, gestureState) => {
      cardBottom.setValue(gestureState.moveY - 50);
    },
    onPanResponderRelease: (_, gestureState) => {
      if (
        (gestureState.moveY > height / 2 && gestureState.vy > -1) ||
        gestureState.vy > 1
      ) {
        animateOut();
      } else if (gestureState.moveY < height / 2 || gestureState.vy < -1) {
        animateIn();
      }
    },
  });

  return (
    <>
      <TouchableWithoutFeedback
        onPress={(e) => {
          animateOut();
        }}
      >
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            opacity: backdropOpacity,
          }}
        ></Animated.View>
      </TouchableWithoutFeedback>
      <Animated.View
        style={[
          bsStyles.card,
          {
            transform: [
              {
                translateY: cardBottom.interpolate({
                  inputRange: [0, cardHeight],
                  outputRange: [0, cardHeight],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}
      >
        <Animated.View
          {...panResponse.panHandlers}
          style={bsStyles.containerIndicador}
        >
          <View style={bsStyles.indicator} />
        </Animated.View>
        <View style={{ height: cardHeight, justifyContent: 'center' }}>
          <Text>Hello Bottom Sheet</Text>
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.secundary,
    height: height + 30,
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  iconSearch: {
    position: 'absolute',
    left: 30,
    color: Colors.grey3,
  },
  containerIcons: {
    flexDirection: 'row',
    paddingTop: 25,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  bgIcons: {
    flexDirection: 'column',
    borderRadius: 50,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
});

export default function Home() {
  const { control, handleSubmit, setValue, errors } = useForm();
  const [location, setLocation] = React.useState('Ubicación actual');
  // ANIMATIONS
  const animatedIcon1 = new Animated.Value(0);
  const animatedIcon2 = new Animated.Value(0);
  const animatedIcon3 = new Animated.Value(0);
  const animatedIcon4 = new Animated.Value(0);
  const animatedIcon5 = new Animated.Value(0);
  const animatedIcon6 = new Animated.Value(0);
  const animatedIcon7 = new Animated.Value(0);
  const animatedIcon8 = new Animated.Value(0);
  const animateIcons = (value: string) => {
    switch (value) {
      case '1':
        Animated.timing(animatedIcon1, {
          toValue: 1,
          useNativeDriver: true,
          duration: 1000,
        }).start();
        break;
      case '2':
        Animated.timing(animatedIcon2, {
          toValue: 1,
          useNativeDriver: true,
          duration: 1000,
        }).start();
        break;
      case '3':
        Animated.timing(animatedIcon3, {
          toValue: 1,
          useNativeDriver: true,
          duration: 1000,
        }).start();
        break;
      case '4':
        Animated.timing(animatedIcon4, {
          toValue: 1,
          useNativeDriver: true,
          duration: 1000,
        }).start();
        break;
      case '5':
        Animated.timing(animatedIcon5, {
          toValue: 1,
          useNativeDriver: true,
          duration: 1000,
        }).start();
        break;
      case '6':
        Animated.timing(animatedIcon6, {
          toValue: 1,
          useNativeDriver: true,
          duration: 1000,
        }).start();
        break;
      case '7':
        Animated.timing(animatedIcon7, {
          toValue: 1,
          useNativeDriver: true,
          duration: 1000,
        }).start();
        break;
      case '8':
        Animated.timing(animatedIcon8, {
          toValue: 1,
          useNativeDriver: true,
          duration: 1000,
        }).start();
        break;
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      animateIcons('1');
    }, 500);
    setTimeout(() => {
      animateIcons('2');
    }, 1000);
    setTimeout(() => {
      animateIcons('3');
    }, 1500);
    setTimeout(() => {
      animateIcons('4');
    }, 2000);
    setTimeout(() => {
      animateIcons('5');
    }, 2500);
    setTimeout(() => {
      animateIcons('6');
    }, 3000);
    setTimeout(() => {
      animateIcons('7');
    }, 3500);
    setTimeout(() => {
      animateIcons('8');
    }, 4000);
  }, [animateIcons]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Feather name='user' size={30} color={Colors.white} />
        <View style={styles.location}>
          <Text
            style={[
              StylesGeneral.text,
              {
                paddingRight: 10,
                color: Colors.white,
                fontWeight: 'bold',
                fontSize: 18,
              },
            ]}
          >
            {location}
          </Text>
          <Feather name='chevron-down' size={25} color={Colors.white} />
        </View>
        <Feather name='share-2' size={30} color={Colors.white} />
      </View>
      <View>
        <Text
          style={{
            marginLeft: 15,
            color: Colors.white,
            fontFamily: 'Roboto-Bold',
            fontSize: 30,
            paddingTop: 20,
          }}
        >
          Search
        </Text>
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
                onBlur={onBlur}
                onChangeText={(value) => onChange(value)}
                value={value}
              />
            )}
          />
          <Feather name='search' size={32} style={styles.iconSearch} />
        </View>
      </View>
      <View style={styles.containerIcons}>
        <Animated.View
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 5,
              opacity: animatedIcon1,
            },
          ]}
        >
          <View style={[styles.bgIcons]}>
            <RestaurantsSvg />
          </View>
          <Text
            style={[
              StylesGeneral.text,
              { paddingTop: 5, color: Colors.white, fontWeight: 'bold' },
            ]}
          >
            Restaurants
          </Text>
        </Animated.View>
        <Animated.View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,
            opacity: animatedIcon2,
          }}
        >
          <View style={[styles.bgIcons]}>
            <DrinksSvg />
          </View>
          <Text
            style={[
              StylesGeneral.text,
              { paddingTop: 5, color: Colors.white, fontWeight: 'bold' },
            ]}
          >
            Bebidas
          </Text>
        </Animated.View>
        <Animated.View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,
            opacity: animatedIcon3,
          }}
        >
          <View style={[styles.bgIcons]}>
            <MarketSvg />
          </View>
          <Text
            style={[
              StylesGeneral.text,
              { paddingTop: 5, color: Colors.white, fontWeight: 'bold' },
            ]}
          >
            Mercados
          </Text>
        </Animated.View>
        <Animated.View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,
            opacity: animatedIcon4,
          }}
        >
          <View style={[styles.bgIcons]}>
            <KioskSvg />
          </View>
          <Text
            style={[
              StylesGeneral.text,
              { paddingTop: 5, color: Colors.white, fontWeight: 'bold' },
            ]}
          >
            Kioscos
          </Text>
        </Animated.View>
      </View>
      <View style={styles.containerIcons}>
        <Animated.View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,
            opacity: animatedIcon5,
          }}
        >
          <View style={[styles.bgIcons]}>
            <PharmacySvg />
          </View>
          <Text
            style={[
              StylesGeneral.text,
              { paddingTop: 5, color: Colors.white, fontWeight: 'bold' },
            ]}
          >
            Farmacias
          </Text>
        </Animated.View>
        <Animated.View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,
            opacity: animatedIcon6,
          }}
        >
          <View style={[styles.bgIcons]}>
            <CafeDolceSvg />
          </View>
          <Text
            style={[
              StylesGeneral.text,
              { paddingTop: 5, color: Colors.white, fontWeight: 'bold' },
            ]}
          >
            {'Café & Deli'}
          </Text>
        </Animated.View>
        <Animated.View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,
            opacity: animatedIcon7,
          }}
        >
          <View style={[styles.bgIcons]}>
            <DeliverySvg />
          </View>
          <Text
            style={[
              StylesGeneral.text,
              { paddingTop: 5, color: Colors.white, fontWeight: 'bold' },
            ]}
          >
            Envios
          </Text>
        </Animated.View>
        <Animated.View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 5,
            opacity: animatedIcon8,
          }}
        >
          <View style={[styles.bgIcons]}>
            <MallSvg />
          </View>
          <Text
            style={[
              StylesGeneral.text,
              { paddingTop: 5, color: Colors.white, fontWeight: 'bold' },
            ]}
          >
            Tiendas
          </Text>
        </Animated.View>
      </View>
      <BottomSheet />
    </SafeAreaView>
  );
}
