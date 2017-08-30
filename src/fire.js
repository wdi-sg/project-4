import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyArL0NFrPX8l2OZhJpOAATN6STN9DRnbvk",
  authDomain: "langauge-wdi11.firebaseapp.com",
  databaseURL: "https://langauge-wdi11.firebaseio.com",
  projectId: "langauge-wdi11",
  storageBucket: "langauge-wdi11.appspot.com",
  messagingSenderId: "519958836577"
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
