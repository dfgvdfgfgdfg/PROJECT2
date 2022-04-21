// Your web app's Firebase configuration

var firebaseConfig = {

  apiKey: "AIzaSyAyqGVZwNBetiDOYfMAMqFucAHKvNJORIE",

  authDomain: "project-chat-app-6e408.firebaseapp.com",

  databaseURL: "https://project-chat-app-6e408-default-rtdb.firebaseio.com",

  projectId: "project-chat-app-6e408",

  storageBucket: "project-chat-app-6e408.appspot.com",

  messagingSenderId: "943875594373",

  appId: "1:943875594373:web:e46f4c38b8a53687e831ec"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);;



  user_name=localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";

  function addRoom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({ 
              purpose : "adding room name"
    })
         localStorage.setItem("room_name" , room_name) ;
         window.location="index.html";   
        
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names= childKey;
    //Start code
console.log("Room Name  -" + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
    //End code
    });
});
}
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="chatting.html";
}
getData();
