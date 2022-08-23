// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyCe5zcB9vlphtpZvQSfQUXs5g-r-rgL9Ew",
    authDomain: "letschatwebapp-e20df.firebaseapp.com",
    projectId: "letschatwebapp-e20df",
    storageBucket: "letschatwebapp-e20df.appspot.com",
    messagingSenderId: "320266551175",
    appId: "1:320266551175:web:192c5c5f2bfc368d319d22",
    measurementId: "G-6S0SR7V6BV"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "LetsChatApp.html";
}

function addroom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "LetsChatWebApp_page.html";
}

function getData()
{
    firebaseConfig.database().ref("/").o('value',
    function(snapshot)
    {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot)) 
        {
childkey = childSnapshot.key;
room_names  = childkey;
row = "div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        }};)};}
        getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "LetsChatWebApp_page.html";
}