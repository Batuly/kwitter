var firebaseConfig = {
      apiKey: "AIzaSyDTSSBUGsoqlEgmX2AzoXSp-uLKjUcb9mE",
      authDomain: "kwitter-24ad0.firebaseapp.com",
      databaseURL: "https://kwitter-24ad0-default-rtdb.firebaseio.com",
      projectId: "kwitter-24ad0",
      storageBucket: "kwitter-24ad0.appspot.com",
      messagingSenderId: "848596553364",
      appId: "1:848596553364:web:29ddd1dcbbf372c794ae81"
    };
  
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_namw,
            message:msg,
            like:0
      });
}
