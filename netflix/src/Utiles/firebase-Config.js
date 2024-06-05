import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeCchmdfBuWft3TXEJGhh3KakqDXtB1yA",
  authDomain: "netfilx-project-88066.firebaseapp.com",
  projectId: "netfilx-project-88066",
  storageBucket: "netfilx-project-88066.appspot.com",
  messagingSenderId: "967183339665",
  appId: "1:967183339665:web:a25e816d4b53f672472f30",
  measurementId: "G-J9V01ZXPWG",
};

const app = initializeApp(firebaseConfig);
export const firebaseauth = getAuth(app);
