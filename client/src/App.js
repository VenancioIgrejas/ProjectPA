import React, { useState } from "react";
import './App.css';
import { Box, ChakraProvider } from "@chakra-ui/react"
import ProductsList from "./components/ProductsList";
import AddProductButton from "./components/AddProductButton";
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
        <AddProductButton />

        <div>
          counter: {counter}
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
    </ChakraProvider>
  );
}

export default App;
