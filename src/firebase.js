import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
  // 위에서 확인했던 FireBase SDK snippet을 이용
};

export default firebase.initializeApp(firebaseConfig);