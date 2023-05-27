import AsyncStorage from '@react-native-async-storage/async-storage';
export async function getStorage() {
  try {
    const value = await AsyncStorage.getItem('@storage_Key');
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (e) {
    console.log(e);
  }
}
