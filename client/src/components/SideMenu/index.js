import { Flex, Stack, Box } from '@chakra-ui/layout';
import { useRadio, useRadioGroup } from '@chakra-ui/radio';
import React from 'react';


// import { Container } from './styles';

function SideMenu({ selected, setSelected }) {
  const options = ["Lista de vendas", "Gráfico de vendas", "Registrar venda", "Adicionar fornecedor", "Lista de fornecedores", "Adicionar categoria"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "side_menu",
    defaultValue: "Lista de vendas",
    onChange: setSelected,
    value: selected,
  });

  const group = getRootProps();

  return (
    <Flex bg="gray.50" padding={5} borderRadius={5}>
      <Stack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </Stack>
    </Flex>
  );
}

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props)

  const input = getInputProps()
  const checkbox = getCheckboxProps()

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        _checked={{
          bg: "teal.600",
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={5}
        py={3}
      >
        {props.children}
      </Box>
    </Box>
  )
}

export default SideMenu;