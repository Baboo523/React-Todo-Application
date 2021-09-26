import * as firebase from 'firebase'
import 'firebase/database'
const firebaseConfig = 
{
  apiKey: "AIzaSyBIEelUmRZWExW_qp8n1iR1D37mPvcMxZk",
  authDomain: "todo-react-72ab9.firebaseapp.com",
  databaseURL: "https://todo-react-72ab9-default-rtdb.firebaseio.com",
  projectId: "todo-react-72ab9",
  storageBucket: "todo-react-72ab9.appspot.com",
  messagingSenderId: "558489902003",
  appId: "1:558489902003:web:41f84fd9250ef3180689c6"
};

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database() 
  export {database, firebase as default }