import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native';
import styles from './styles';
import { Image, Svg } from 'react-native-svg';
import Animated, {useSharedValue, useAnimatedStyle, interpolate} from 'react-native-reanimated';

export default function App() {
  const {height, width} = Dimensions.get('window');
  const imagePosition = useSharedValue(1);
  const imageAnimatedStyle = useAnimatedStyle(()=> {
    const interpolation = interpolate(imagePosition.value, [0,1], [-height/2, 0])
    return{
      transform: []
    }
  })


  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height} width={width}>
          <Image href={require('./assets/login-background.jpg')} width={width} height={height} preserveAspectRatio='xMidYMid slice' />
        </Svg>
        <View style={styles.closeButtonContainer}>
          <Text>X</Text>
        </View>
      </Animated.View>
      <View style={styles.buttomContainer}>
        {/* <View style={styles.button}>
          <Text style={styles.buttonText}>
            LOG IN 
          </Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            REGISTER
          </Text>
        </View> */}
        <View style={styles.formInputContainer}>
          <TextInput placeholder='Email' placeholderTextColor='black' style={styles.textinput}/>
          <TextInput placeholder='Full Name' placeholderTextColor='black' style={styles.textinput} />
          <TextInput placeholder='Password' placeholderTextColor='black' style={styles.textinput} />
          <View style={styles.formBottom}>
                <Text style={styles.buttonText}> LOG IN </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

