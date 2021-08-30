const firebaseConfig = {
      apiKey: "AIzaSyAcliNFaIzuxYoYlNluf1yBZBSBv-Cx4xA",
      authDomain: "kwitter-f51b2.firebaseapp.com",
      databaseURL: "https://kwitter-f51b2-default-rtdb.firebaseio.com",
      projectId: "kwitter-f51b2",
      storageBucket: "kwitter-f51b2.appspot.com",
      messagingSenderId: "289794255847",
      appId: "1:289794255847:web:ff362417ba51d5f94d6b42",
      measurementId: "G-9WKHQY2E0G"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
