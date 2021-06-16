import React from "react";
import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import MainScreen from "./screens/MainScreen";
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin + '/'}
      audience={`https://${domain}/api/v2/`}
      scope="read:current_user update:current_user_metadata"
    >
      <ChakraProvider>
        <MainScreen />
      </ChakraProvider>
    </Auth0Provider>
  );
}

export default App;
