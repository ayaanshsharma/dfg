
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDmcfwCrC6y-Wv7FOYyxDTmU_jP7LUNEfI",
      authDomain: "kwitter-51cf5.firebaseapp.com",
      projectId: "kwitter-51cf5",
      storageBucket: "kwitter-51cf5.appspot.com",
      messagingSenderId: "154991688367",
      appId: "1:154991688367:web:04890b8eca2e6e469f725a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
