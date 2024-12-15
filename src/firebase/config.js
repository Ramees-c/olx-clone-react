import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyD4RBD3b85Kl5zU2V9VoaRp-_oZHwjWZwQ",
  authDomain: "olx-clone-d8aa9.firebaseapp.com",
  projectId: "olx-clone-d8aa9",
  storageBucket: "olx-clone-d8aa9.firebasestorage.app",
  messagingSenderId: "570146724949",
  appId: "1:570146724949:web:ce54697fec4c356bc748dc"
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);