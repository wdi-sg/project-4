import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyD-4TmnFINLolgOo4NRuCdLxNbj6DMcY1k',
  authDomain: 'graviton-eabd7.firebaseapp.com',
  databaseURL: 'https://graviton-eabd7.firebaseio.com',
  projectId: 'graviton-eabd7',
  storageBucket: '',
  messagingSenderId: '526514451200'
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth
