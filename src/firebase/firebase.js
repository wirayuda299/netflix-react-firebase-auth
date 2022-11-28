import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyA1IN3-tInK8qZLtciRg7EpQrkAAQUY2dc',

  authDomain: 'netflix-40019.firebaseapp.com',

  projectId: 'netflix-40019',

  storageBucket: 'netflix-40019.appspot.com',

  messagingSenderId: '1044019747081',

  appId: '1:1044019747081:web:bfcf353e3086c84eb5dbd8',
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
