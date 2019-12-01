import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyC3hCabRCiZBNvTh5Zxfe1pwGfI3ADOMZI",
    authDomain: "frontend-react-graphql.firebaseapp.com",
    databaseURL: "https://frontend-react-graphql.firebaseio.com",
    projectId: "frontend-react-graphql",
    storageBucket: "frontend-react-graphql.appspot.com",
    messagingSenderId: "1003100907182",
    appId: "1:1003100907182:web:9f6a28c41b76f0ad2def3f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {
    storage, firebase as default
}