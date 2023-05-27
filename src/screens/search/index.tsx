import React, {useRef, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchButton from '../../assets/icons/magnifying-glass-solid (1).svg';
import CancelButton from '../../assets/icons/cancel.svg';
import SearchCard from '../../component/SearchCard';
import {Text} from 'react-native-svg';

const url = 'https://librivox.org/api/feed/audiobooks/?title=';
const Search = () => {
  const [value, setValue] = useState('');
  const [book, setBook] = useState([]);
  const ref = useRef<TextInput>();
  const getSearch = async () => {
    const response = await fetch(url + value + '&format=json', {method: 'GET'});
    const result = await response.json();
    setBook(result.books);
  };
  const onChangeText = (text: string) => {
    setValue(text);
  };
  const Clear = () => {
    ref.current?.clear();
    setBook([]);
    setValue('');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require('../../assets/images/otherLogo.png')}
        />
      </View>

      <View style={styles.search}>
        <View style={styles.search}>
          <TouchableOpacity onPress={getSearch}>
            <SearchButton width={30} height={22} fill={'#383838'} />
          </TouchableOpacity>
          <TextInput
            placeholder="Search..."
            placeholderTextColor="black"
            ref={ref}
            value={value}
            onChangeText={onChangeText}
          />
        </View>
        <CancelButton width={25} height={25} fill={'#383838'} onPress={Clear} />
      </View>
      <ScrollView>
        {book?.map((item, index) => (
          <Text key={index}>{item.title}</Text>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Search;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 100,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DBDFEA',
    borderRadius: 15,
    paddingHorizontal: 10,
  },
});
