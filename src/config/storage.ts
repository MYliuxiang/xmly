import Storage, {LoadParams} from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24 * 7,
  enableCache: true,
  sync: {},
});

const storageLoad = (params: LoadParams) => {
  return new Promise((resolve, reject) => {
    storage
      .load(params)
      .then(ret => {
        resolve(ret);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

export {storageLoad};
export default storage;
