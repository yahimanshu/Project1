import AsyncStorage from '@react-native-async-storage/async-storage';


export async function getdata(key) {
      try {
        const value = await AsyncStorage.getItem(key);
        return value;
      } catch (error) {
        console.error('Error getting AsyncStorage item:', error);
        // Handle error appropriately (e.g., log, show a message, etc.)
      }
    }