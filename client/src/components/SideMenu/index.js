import { Flex, Stack } from '@chakra-ui/layout';
import { Radio, RadioGroup } from '@chakra-ui/radio';
import React from 'react';

// import { Container } from './styles';

function SideMenu({ selected, setSelected }) {
  return (<Flex bg="gray.50" width="17%" padding={5} borderRadius={5}>
    <RadioGroup onChange={setSelected} value={selected}>
      <Stack direction="column">
        <Radio value="1">Lista de vendas</Radio>
        <Radio value="2">Gráfico de vendas</Radio>
        <Radio value="3">Registrar venda</Radio>
        <Radio value="4">Adicionar fornecedor</Radio>
        <Radio value="5">Lista de fornecedores</Radio>
        <Radio value="6">Adicionar categoria</Radio>
      </Stack>
    </RadioGroup>
  </Flex>
  );
}

export default SideMenu;