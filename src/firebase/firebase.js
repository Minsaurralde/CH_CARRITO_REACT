//importo las funciones que necesito de firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuracion de mi proyecto en firebase || ver archivos env //
const firebaseConfig = {
  apiKey: "AIzaSyC4sDw0Zu3QpuUMCUDtAk0zwpbnkjhecVw",
  authDomain: "mi-carrito-react.firebaseapp.com",
  projectId: "mi-carrito-react",
  storageBucket: "mi-carrito-react.appspot.com",
  messagingSenderId: "678063816402",
  appId: "1:678063816402:web:aa413dcc64e122db6a770b"
};

//variable para iniciar Firebase //
const firebaseApp = initializeApp(firebaseConfig);

//finalmente exporto lo siguiente: //
export const db = getFirestore(firebaseApp);