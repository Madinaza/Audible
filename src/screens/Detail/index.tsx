import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Button,
  LayoutAnimation,
  ScrollView,
} from 'react-native';

import Download from '../../assets/icons/download.svg';
import Decscription from '../../assets/icons/description.svg';
export interface Book {
  id: string;
  title: string;
  description: string;
  url_text_source: string;
  language: string;
  copyright_year: string;
  num_sections: string;
  url_rss: string;
  url_zip_file: string;
  url_project: string;
  url_librivox: string;
  url_other: string;
  totaltime: string;
  totaltimesecs: number;
  authors: Author[];
}

export interface Author {
  id: string;
  first_name: string;
  last_name: string;
  dob: string;
  dod: string;
}

const Detail = ({navigation, route}) => {
  const animationController = React.useRef(new Animated.Value(0)).current;
  const [isShow, setIsShow] = React.useState(false);
  const [book] = useState<Book | null>(route.params.item);

  console.log(book?.authors);

  const rotateTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const handleDropDownPress = (): void => {
    const duration = 300;
    const config = {
      duration,
      toValue: isShow ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    setIsShow(!isShow);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.textcontainer}>
          <Image
            style={styles.audible}
            source={require('../../assets/images/audible-logo.png')}
          />
        </View>
        <View style={styles.container1}>
          <Image
            style={styles.bookphoto}
            source={require('../../assets/images/bookPhoto.png')}
          />
        </View>
        <View style={styles.buttoncontainer}>
          <View style={styles.textcontainer}>
            <View style={styles.row}>
              <Text style={styles.text}>Book Name:</Text>
              <Text style={styles.text1}>{book?.title}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Written by :</Text>
              <Text style={styles.text1}>
                {/* if there is no writer name then show John Doe */}
                {book?.authors[0]?.first_name +
                  ' ' +
                  book?.authors[0]?.last_name}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text}>Rating:</Text>
              <Text style={styles.text1}>{7.5}</Text>
            </View>
          </View>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleDropDownPress()}>
              <Text style={styles.text1}>DESCRIPTION</Text>
              <Animated.View style={{transform: [{rotateZ: rotateTransform}]}}>
                <Decscription />
              </Animated.View>
            </TouchableOpacity>
          </View>
          {isShow ? (
            <Animated.View style={[styles.container1]}>
              <Text style={styles.text2}>
                {book?.description.replace(/(<([^>]+)>)/gi, '')}
              </Text>
            </Animated.View>
          ) : null}
          <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.button}>
              <Download />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 15,
  },
  container1: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  textcontainer: {
    marginHorizontal: 25,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    overflow: 'hidden',
    overlayColor: 'white',
  },
  buttoncontainer: {
    gap: 20,
    marginHorizontal: 10,
  },
  container5: {
    flexDirection: 'row',
  },
  audible: {
    justifyContent: 'center',
    height: 60,
    width: 160,
    alignItems: 'center',
  },
  bookphoto: {
    alignItems: 'center',
    height: 300,
    width: 300,
  },
  text: {
    color: '#00235B',
    fontSize: 24,
    fontWeight: '500',
  },
  text1: {
    color: '#00235B',
    fontSize: 24,
    fontWeight: '900',
  },
  button: {
    backgroundColor: '#DBDFEA',
    borderRadius: 20,
    height: 45,
    width: 350,
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 0,
    justifyContent: 'space-around',
  },
  icon: {
    width: 20,
    height: 20,
  },
  download: {
    width: 40,
    height: 40,
  },
  navigator: {
    height: 60,
    width: 395,
    backgroundColor: '#00235B',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 89,
  },
  text2: {
    fontSize: 17,
    fontWeight: '500',
    color: '#27374D',
  },
});
