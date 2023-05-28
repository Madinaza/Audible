import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Arrow from '../../assets/icons/chevron-right-solid.svg';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const GetStartedScreen = () => {
  const navigation = useNavigation();
  // const handleSearchScreen = () => {
  //   navigation.navigate('SearchScreen');
  // };
  const handleNavigateToTab = () => {
    navigation.navigate('TabNavigator');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Image
        style={styles.logoImg}
        source={require('../../assets/images/logo.png')}
      />
      <ImageBackground
        resizeMode="stretch"
        style={styles.backgroundImg}
        source={require('../../assets/images/Pillow.png')}>
        <View style={styles.footer}>
          <Text style={styles.title}>
            ENJOY THOUSANDS OF BOOKS ON AUDIO AND READ ONLINE.
          </Text>
          <Text style={styles.description}>
            The first completely free audio book library with the latest world
            titles aviable right now.
          </Text>
          <TouchableOpacity
            style={styles.buttons}
            onPress={handleNavigateToTab}>
            <Text style={styles.btnText}>GET STARTED</Text>
            <Arrow fill={'#00235B'} style={styles.btnIcon} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default GetStartedScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
  },
  logoImg: {
    width: '100%',
    height: 320,
    top: 30,
  },
  backgroundImg: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontFamily: 'MavenProExtraBold',
    color: '#F2F2F2',
    textAlign: 'center',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingHorizontal: 30,
  },
  description: {
    fontSize: 13,
    fontFamily: 'MavenProExtraBold',
    color: '#B2B2B2',
    fontWeight: '300',
    textAlign: 'center',
    marginVertical: 20,
  },
  buttons: {
    backgroundColor: '#FFFFFF',
    height: 50,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
  },
  btnText: {
    fontSize: 28,
    fontFamily: 'MavenProExtraBold',
    color: '#00235B',
  },
  btnIcon: {
    width: 30,
    height: 30,
  },
});
