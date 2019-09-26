console.log("Bievenido al Workshop");

const firebase = require("firebase-admin");

//#1 - Cambia el PATH de nuestro Service Account
const serviceAccount = require("./fir-demo-tall-firebase-adminsdk-slx1i-f2a13f3b51.json");

//#2 - Cambia la URL de la Base de datos
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://LA URL DE TU BASE DE DATOS"
});

const reference = firebase.database().ref(".info/connected");
try{
reference.on('value', function(connectedSnap) {
  if (connectedSnap.val() === true){
    console.log('Ya estas conectado a Firebase 🔥');
  } else {
    console.log('Espera un segundo...');
  }
});
}catch(error){
	console.log('Verifica los permisos de tu ServiceAccount')
}