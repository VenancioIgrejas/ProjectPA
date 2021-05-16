import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box, Heading } from '@chakra-ui/layout';
import { Formik } from 'formik';
import React from 'react';

function AddProductForm() {
  return <Box>
    <Heading>Adicionar venda</Heading>
    <Formik>
      <FormControl paddingY={10}>
        <FormLabel>Nome</FormLabel>
        <Input />
      </FormControl>
    </Formik>
  </Box>;
}

export default AddProductForm;