import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBo2sRK2qd6Yva64ZO1bKdYflGzffzSwEI",
  authDomain: "react-39545-f3115.firebaseapp.com",
  projectId: "react-39545-f3115",
  storageBucket: "react-39545-f3115.appspot.com",
  messagingSenderId: "673315716394",
  appId: "1:673315716394:web:bbcbc3768b2ee964f8f253"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider/>
    <App />
    <ChakraProvider/>
  </React.StrictMode>,
)