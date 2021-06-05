import React from "react";
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import MainScreen from "./screens/MainScreen";
import NavBar from "./components/NavBar";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Share/loading";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ChakraProvider>
      <NavBar/>
      <MainScreen />
    </ChakraProvider>
  );
}

export default App;
