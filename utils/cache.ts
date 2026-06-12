import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

export const tokenCache = {
  async getToken(key: string) {
    try {
      if (Platform.OS === 'web') {
        try {
          if (typeof window !== 'undefined') {
            return localStorage.getItem(key);
          }
        } catch (e) {
          return null;
        }
        return null;
      }
      const item = await SecureStore.getItemAsync(key);
      if (item) {
        console.log(`${key} was used 🔐 \n`);
      } else {
        console.log('No values stored under key: ' + key);
      }
      return item;
    } catch (error) {
      console.error('SecureStore get item error: ', error);
      if (Platform.OS !== 'web') {
        await SecureStore.deleteItemAsync(key);
      }
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      if (Platform.OS === 'web') {
        try {
          if (typeof window !== 'undefined') {
            localStorage.setItem(key, value);
          }
        } catch (e) {
          // ignore
        }
        return;
      }
      return SecureStore.setItemAsync(key, value);
    } catch {
      return;
    }
  },
};