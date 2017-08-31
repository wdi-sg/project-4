import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyA54yNxPFESKXG3VZS4p9oWyWTYE-RqyKk',
  authDomain: 'react-router-firebase-au-32d9c.firebaseapp.com',
  databaseURL: 'https://react-router-firebase-au-32d9c.firebaseio.com',
  projectId: 'react-router-firebase-au-32d9c',
  storageBucket: '',
  messagingSenderId: '895586825660'
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
