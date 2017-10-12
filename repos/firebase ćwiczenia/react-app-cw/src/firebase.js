import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAGZNA0Hf_t4-bJXXs0bVYFeMdYDCs8qCw",
    authDomain: "moj-pierwszy-projekt-c1029.firebaseapp.com",
    databaseURL: "https://moj-pierwszy-projekt-c1029.firebaseio.com",
    projectId: "moj-pierwszy-projekt-c1029",
    storageBucket: "moj-pierwszy-projekt-c1029.appspot.com",
    messagingSenderId: "506199708649"
};

let firebaseApp=firebase.initializeApp(config);

export const database=firebaseApp.database();
export default firebaseApp;