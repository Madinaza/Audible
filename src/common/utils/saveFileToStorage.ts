import AsyncStorage from '@react-native-async-storage/async-storage';
import {getStorage} from './getStorage';
export async function saveFileToStorage(_item: any) {
  console.log(_item, 'item');
  try {
    //  writing to storage id and path. it will be array of objects
    const value = await AsyncStorage.getItem('@storage_Key');
    if (value !== null) {
      const parsedValue = JSON.parse(value);
      //  we should make sure that we don't have the same id in storage
      const isIdExist = parsedValue.some((item: any) => item.id === _item.id);
      if (!isIdExist) {
        await AsyncStorage.setItem(
          '@storage_Key',
          JSON.stringify([...parsedValue, {..._item}]),
        );
      }
    } else {
      await AsyncStorage.setItem('@storage_Key', JSON.stringify([{..._item}]));
    }
    getStorage();
  } catch (e) {
    // writin storage error to console
    console.log(e);
  }
}
