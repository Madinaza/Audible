import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  RefreshControl,
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import useEffectOnce from 'react-use/lib/useEffectOnce';
import {getStorage} from '../../common/utils/getStorage';
import {useFocusEffect} from '@react-navigation/native';

const url = 'https://librivox.org/api/feed/audiobooks/?format=json&id=';
const Bookshelf = () => {
  const [value, setValue] = useState('Fábulas de Esopo, Vol. 1');
  const [book, setBook] = useState([]);
  const ref = useRef<TextInput>();
  const [refreshing, setRefreshing] = useState(false);
  const getSearch = async () => {
    // search book from bookshelf
  };

  useEffect(() => {
    getStorage().then(res => {
      setBook(res);
    });
  }, [getStorage()]);

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
            value={value}
            onChangeText={onChangeText}
          />
        </View>
        <CancelButton width={25} height={25} fill={'#383838'} onPress={Clear} />
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              getStorage().then(res => {
                setBook(res);
                setRefreshing(false);
              });
            }}
          />
        }>
        {book?.map((item, index: number) => {
          return <SearchCard item={item} key={index} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Bookshelf;
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
