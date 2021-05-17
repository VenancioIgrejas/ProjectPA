import React, { useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react"

// import { Container } from './styles';

function AddProductButton() {
  const [buttonText, buttonState] = useState("+");
  const changeButtonText = () => {
    buttonState ("Inserindo...")
  }

  return (
    <Button colorScheme="blue" onClick={changeButtonText}>
      {buttonText}
    </Button>
  );

}

export default AddProductButton;
