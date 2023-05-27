import AsyncStorage from '@react-native-async-storage/async-storage';
import {getStorage} from './getStorage';

export async function removeFileFromStorage(id: string) {
  try {
    const value = await AsyncStorage.getItem('@storage_Key');
    if (value !== null) {
      const parsedValue = JSON.parse(value);
      const filteredValue = parsedValue.filter((item: any) => item.id !== id);
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(filteredValue));
      getStorage();
    }
  } catch (e) {
    console.log(e);
  }
}
