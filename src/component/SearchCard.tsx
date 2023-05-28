import React, {useCallback, useMemo} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Downloads from '../assets/icons/Vector.svg';
import RemoveIcon from '../assets/icons/Remove.svg';
import {PublicationFormat, useBookFile} from '../common/useBookFile';
import useEffectOnce from 'react-use/lib/useEffectOnce';
import * as Progress from 'react-native-progress';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
// view stilleri - mainContainer, mediaWrapper, headerContainer, childContainer, chidlWrapper ...
// text stilleri - headerTitle, descriptionTitle...
// button stilleri - mainButton, deleteButton, buttonWrap
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

const SearchCard = ({item}) => {
  const navigation = useNavigation();
  const {
    download,
    fileStatus,
    removeFile,
    checkFile,
    downloadProgress,
    cancel,
  } = useBookFile(item.id, PublicationFormat.Zip, item);
  const downloadHandler = async () => {
    console.log(fileStatus, 'status');
    const result = await download(item.url_zip_file);
    console.log(result, 'result');
  };

  useEffectOnce(() => {
    checkFile();
  });
  const rightContent = () => {
    switch (fileStatus) {
      case 'online':
        return {
          Component: <Downloads width={35} height={35} />,
          onPress: downloadHandler,
        };

      case 'downloading':
        return {
          Component: <DownloadProgress progress={downloadProgress || 0} />,
          onPress: () => {
            cancel();
            removeFile();
          },
        };
      case 'offline':
        return {
          Component: <RemoveIcon width={35} height={35} />,
          onPress: removeFile,
        };
    }
  };

  const navigationHandler = useCallback(() => {
    navigation.navigate('DetailScreen', {item});
  }, [item]);

  return (
    <TouchableOpacity style={styles.container} onPress={navigationHandler}>
      <Image
        resizeMode="contain"
        style={styles.bookimage}
        source={require('../assets/images/bookPhoto.png')}
      />
      <View style={styles.datemedia}>
        <View>
          <Text style={styles.bookname}>{item?.title}</Text>
          <Text style={styles.writername}>{item?.author}</Text>
          <Text>
            {item.totaltime.toString()} |{item.num_sections} Chapters
          </Text>
        </View>
        <TouchableOpacity onPress={rightContent()?.onPress}>
          {rightContent()?.Component}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
export default SearchCard;

function DownloadProgress({progress}: {progress: number}) {
  return (
    <View style={{width: 35, height: 35}}>
      <Progress.Circle
        size={35}
        thickness={4}
        animated={false}
        progress={progress}
        borderWidth={0}
        color={'orangered'}
        unfilledColor={'#00156B'}
        textStyle={{fontSize: 11, color: '#00156B'}}
        fill="transparent"
        showsText={true}
        formatText={() => `${Math.round(progress * 100).toFixed(0)}%`}
      />
    </View>
  );
}

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
