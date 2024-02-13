
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
    apiKey: "AIzaSyDKPKUyWXfnX8ZOcxUuScH2pQKjwasstvU",
    authDomain: "backend-appemergencias.firebaseapp.com",
    databaseURL: "https://backend-appemergencias-default-rtdb.firebaseio.com",
    projectId: "backend-appemergencias",
    storageBucket: "backend-appemergencias.appspot.com",
    messagingSenderId: "635953003175",
    appId: "1:635953003175:web:02575e908497337d3df982",
    measurementId: "G-C1XM18CGE9",
    
  } 

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app); 
  const db = getFirestore(app);

  export { db};