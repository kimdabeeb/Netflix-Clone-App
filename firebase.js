// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyByQRmdZUHAAileM-pP-pAz5g7l4HyATTE',
  authDomain: 'netflix-clone-app-ea193.firebaseapp.com',
  projectId: 'netflix-clone-app-ea193',
  storageBucket: 'netflix-clone-app-ea193.appspot.com',
  messagingSenderId: '892713027121',
  appId: '1:892713027121:web:5894c5d992bcaf86cb3710',
  measurementId: 'G-Y3N48VKPPB',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export default firebaseConfig;