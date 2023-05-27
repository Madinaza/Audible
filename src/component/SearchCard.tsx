import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Downloads from '../assets/icons/Vector.svg';

// view stilleri - mainContainer, mediaWrapper, headerContainer, childContainer, chidlWrapper ...
// text stilleri - headerTitle, descriptionTitle...
// button stilleri - mainButton, deleteButton, buttonWrap

const SearchCard = ({item}) => {
  return (
    <View style={styles.container}>
      {/* <Image
        resizeMode="contain"
        style={styles.bookimage}
        source={require('../assets/images/bookPhoto.png')}
      /> */}
      <View style={styles.datemedia}>
        <View>
          <Text style={styles.bookname}>{item?.title}</Text>
          <Text style={styles.writername}>{item?.author}</Text>
          <Text>4h .20min |12 Chapters</Text>
        </View>
        <TouchableOpacity>
          <Downloads width={35} height={35} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SearchCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  bookimage: {
    height: 130,
    width: 120,
    borderRadius: 15,
  },
  bookname: {
    color: '#00156B',
    fontSize: 22,
    fontFamily: 'MavenProExtraBold',
  },
  writername: {
    fontWeight: '500',
  },
  datemedia: {
    borderWidth: 1,
    borderColor: 'grey',
    height: 95,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    paddingHorizontal: 20,
  },
});
