import React from "react";
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import MainScreen from "./screens/MainScreen";
import NavBar from "./components/NavBar";

import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Share/loading";
import Routes from "./routes";
import SideBar from "./components/Sidebar"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ChakraProvider>
      <div className="container-md">
        <div class="row">
          <div class="col-2">
            <SideBar/>
           </div>
          <div class="col-10">
            <div class="row">
            <NavBar />
            </div>
            <div class="row justify-content-md-center">
            <Routes />
            </div>
          </div>
        </div>
      </div>
      {/* <MainScreen /> */}
    </ChakraProvider>
  );
}

export default App;
