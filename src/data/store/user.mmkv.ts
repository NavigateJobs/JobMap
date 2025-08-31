// user.mmkv.ts
import { MMKV } from 'react-native-mmkv';

export const JobLocator = new MMKV({
  id: 'user_storage', 
  encryptionKey: process.env.REACT_APP_MMKV_ENCRYPTION_KEY
});
