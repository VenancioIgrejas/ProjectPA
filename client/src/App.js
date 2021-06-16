import React from "react";
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import MainScreen from "./screens/MainScreen";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ChakraProvider>
      <MainScreen />
    </ChakraProvider>
  );
}

export default App;
