import React from "react";
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import MainScreen from "./screens/MainScreen";

function App() {
  return (
    <ChakraProvider>
      <MainScreen />
    </ChakraProvider>
  );
}

export default App;
