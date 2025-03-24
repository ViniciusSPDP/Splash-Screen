import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/database';

let firebaseConfig = {
  apiKey: "AIzaSyBblt-8Uhu8SHrze_6__HUsmvsQwlbIyXI",
  authDomain: "s4r41va-app-boer.firebaseapp.com",
  projectId: "s4r41va-app-boer",
  storageBucket: "s4r41va-app-boer.firebasestorage.app",
  messagingSenderId: "711599016456",
  appId: "1:711599016456:web:c612213ae862d43eaf5fbd"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;