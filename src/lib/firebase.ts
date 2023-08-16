import {getAuth} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBMCByUvBPLIbAj-R-Fy4-rgeRrTzvrmyU",
  authDomain: "adeelhackathon.firebaseapp.com",
  projectId: "adeelhackathon",
  storageBucket: "adeelhackathon.appspot.com",
  messagingSenderId: "934633530269",
  appId: "1:934633530269:web:d9b331eb8906f8ca07c574"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
