// Your web app's Firebase configuration
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
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
    console.log("room Name -" + room_names);
    row = "<div class='room_name' id="+room_names+" onclick='redirectToRoomName(this.id)' >#"+room_names+"</div><hr>;
    document.getElementById("output").innerHTML + row;
      
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name)
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

 function logout() {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       wondow.location = "index.html";
 }