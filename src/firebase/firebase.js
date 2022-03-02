//importo las funciones que necesito de firebase
import { initializeApp } from "firebase/app";
import { getFirestore, writeBatch } from "firebase/firestore";

// Configuracion de mi proyecto en firebase || si fuera un proyecto privado pasar a archivos .env la info//
const firebaseConfig = {
  apiKey: "AIzaSyC4sDw0Zu3QpuUMCUDtAk0zwpbnkjhecVw",
  authDomain: "mi-carrito-react.firebaseapp.com",
  projectId: "mi-carrito-react",
  storageBucket: "mi-carrito-react.appspot.com",
  messagingSenderId: "678063816402",
  appId: "1:678063816402:web:aa413dcc64e122db6a770b"
};

//Variable para inicializar Firebase //
const firebaseApp = initializeApp(firebaseConfig);

//Exporto la conexion a mi base de datos//
export const db = getFirestore(firebaseApp);

//para actualizar datos en las colecciones/documentos que quiera//
export let batch = writeBatch(db);

//para actualizar datos en las colecciones/documentos que quiera//
export let commitear = () => {batch.commit(); batch = writeBatch(db);}

