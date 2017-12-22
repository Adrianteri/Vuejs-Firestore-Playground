import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.InitializeApp(firebaseConfig)

export default firebaseApp.firestore()