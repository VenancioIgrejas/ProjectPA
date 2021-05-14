import React, { useState } from "react";
import './App.css';
import { Box, ChakraProvider } from "@chakra-ui/react"
import ProductsList from "./components/ProductsList";
import MainScreen from "./screens/MainScreen";

function App() {

  const [teste, setTeste] = useState(0);
  let counter = 0;
  const myFunc = () => {
    setTeste(teste + 1);
    console.log(teste);
  }
  return (
    <ChakraProvider>
      <div className="App">
        <MainScreen />
        <ProductsList />
        <div>
          counter: {counter}
        </div>
        <div>
          teste: {teste}
        </div>
        <button onClick={() => {
          counter++
          console.log(counter);
        }}>
          aumentar counter!
    </button>
        <button onClick={myFunc}>
          aumentar teste!
    </button>
      </div>
      <Box bg="tomato" w="100%" p={4} color='white'>
        hello hello
    </Box>
    </ChakraProvider>
  );
}

export default App;
