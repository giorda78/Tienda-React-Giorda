import firebase from "firebase"
import 'firebase/firestore' 

const firebaseConfig = {
    apiKey: "AIzaSyDmwunyOvPuhiTGo6MsFMOQq67Fk9M9y4U",
    authDomain: "comida-rapida-c4092.firebaseapp.com",
    projectId: "comida-rapida-c4092",
    storageBucket: "comida-rapida-c4092.appspot.com",
    messagingSenderId: "95170719117",
    appId: "1:95170719117:web:6f1666167237b2026e61c4"
};
  const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){
    return firebase.firestore(app)
};