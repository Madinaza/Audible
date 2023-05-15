import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Arrow from './assets/icons/chevron-right-solid.svg';
const GetStarted = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          style={styles.logoImg}
          source={require('./assets/images/logo.png')}
        />
        <View>
          <ImageBackground
            resizeMode="contain"
            style={styles.backgroundImg}
            source={require('./assets/images/Pillow.png')}>
            <View style={styles.Input}>
              <Text style={styles.text}>
                ENJOY THOUSANDS OF BOOKS ON AUDIO AND READ ONLINE.
              </Text>
              <Text style={styles.paragh}>
                The first completely free audio book library with the latest
                world titles aviable right now.
              </Text>
              <TouchableOpacity style={styles.buttons}>
                <Text>GET STARTED</Text>
                <Arrow />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logoImg: {
    width: '100%',
    height: 320,
    top: 60,
  },
  backgroundImg: {
    height: 500,
  },
  text: {
    fontSize: 25,
    fontFamily: 'MavenProExtraBold',
    color: '#F2F2F2',
    fontWeight: '900',
    textAlign: 'center',
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  Input: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragh: {
    fontSize: 13,
    fontFamily: 'MavenProExtraBold',
    color: '#B2B2B2',
    fontWeight: '300',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  buttons: {
    backgroundColor: '#FFFFFF',
    width: '85%',
    height: 60,
    borderRadius: 20,
    top: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
