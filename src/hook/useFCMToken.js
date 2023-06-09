import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export const useFCMToken = () => {
  const [token, setToken] = useState(null);
  const [isTokenReady, setIsTokenReady] = useState(false);

  useEffect(() => {
    const getFCMToken = async () => {
      let fcmToken = await AsyncStorage.getItem('fcmToken');
      if (!fcmToken) {
        try {
          fcmToken = await messaging().getToken();
          if (fcmToken) {
            await AsyncStorage.setItem('fcmToken', fcmToken);
            setIsTokenReady(true);
          }
        } catch (err) {
          console.log(err, 'fcmtoken에서 error 발생');
        }
      }
      setToken(fcmToken);
      setIsTokenReady(true);
    };

    getFCMToken();
  }, []);

  return {token, isTokenReady};
};
