import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/compat/auth'; 


const firebaseConfig = {
  apiKey: "AIzaSyBEq9Ieth1aUcCM98kTFjavRz1PU4ev0I8",
  authDomain: "aula1-17285.firebaseapp.com",
  projectId: "aula1-17285",
  storageBucket: "aula1-17285.appspot.com",
  messagingSenderId: "188900964962",
  appId: "1:188900964962:web:ddb1e02279d10bab50af3b",
  measurementId: "G-4FYCDH2B0T"
};
// Inicialize o Firebase
// Delete o Firebase App existente, se existir
if (firebase.apps.length) {
  firebase.apps[0].delete()
    .then(() => {
      console.log('Firebase App excluído com sucesso');
      // Inicialize o Firebase com a nova configuração
      firebase.initializeApp(firebaseConfig);
    })
    .catch(error => {
      console.error('Erro ao excluir o Firebase App:', error);
    });
} else {
  console.log('Nenhum Firebase App encontrado para excluir');
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
