
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAkRvgFRx_tKzDbqb6WVD_vxqZSzRdln8g",
      authDomain: "kwitter-page-bd95f.firebaseapp.com",
      databaseURL: "https://kwitter-page-bd95f-default-rtdb.firebaseio.com",
      projectId: "kwitter-page-bd95f",
      storageBucket: "kwitter-page-bd95f.appspot.com",
      messagingSenderId: "461898280109",
      appId: "1:461898280109:web:38727da1493f2eba57aa24",
      measurementId: "G-BZMYPDT676"
    };
    
    
     firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
