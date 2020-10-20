// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB2CtIo3UxzDonWJEzVSfxUwChifOD6NRA",
  authDomain: "discord-clone-react-ca7f9.firebaseapp.com",
  databaseURL: "https://discord-clone-react-ca7f9.firebaseio.com",
  projectId: "discord-clone-react-ca7f9",
  storageBucket: "discord-clone-react-ca7f9.appspot.com",
  messagingSenderId: "1090823230030",
  appId: "1:1090823230030:web:ff09b5ab8d2b15c2a6a91f",
  measurementId: "G-R7H3F93243",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, storage, provider };
export default db;
