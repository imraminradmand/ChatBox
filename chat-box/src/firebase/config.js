import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCTYvziE281G3kTM2EfKD_qZiAOopNgfP8",
    authDomain: "vueproject1-74f6c.firebaseapp.com",
    projectId: "vueproject1-74f6c",
    storageBucket: "vueproject1-74f6c.appspot.com",
    messagingSenderId: "70211203430",
    appId: "1:70211203430:web:eb678ebee1c97637f158a7"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init firestore
  const projectFirestore = firebase.firestore()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  //init firebase auth
  const chatAuth = firebase.auth()

  export { projectFirestore, timestamp, chatAuth }