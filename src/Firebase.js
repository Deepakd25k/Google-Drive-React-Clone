import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBS0tV7svPfso5RLfvBxUsAU-D2jvIEy7g",
    authDomain: "drive-clone2.firebaseapp.com",
    projectId: "drive-clone2",
    storageBucket: "drive-clone2.appspot.com",
    messagingSenderId: "1075269695258",
    appId: "1:1075269695258:web:e5d844af9ed9a6ca84dea3",
    measurementId: "G-X5VRXM6XBX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, storage, auth, provider }