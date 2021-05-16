import 'date-fns';
import { Button } from '@chakra-ui/button';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input';
import { Box, Heading, Stack } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { Field, Form, Formik } from 'formik';
import CreatableSelect from 'react-select/creatable';
import React from 'react';
import { Textarea } from '@chakra-ui/textarea';
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/number-input';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

function AddProductForm() {
  function validateName(value) {
    if (!value) return "Nome é um campo obrigatório"

  }

  function validateCategory(value) {
    if (!value) return "Categoria é um campo obrigatório"
  }
  function validatePrice(value) { if (!value) return "Preço é um campo obrigatório" }
  function validateQuantity(value) { if (!value) return "Quantidade é um campo obrigatório" }

  return <Box>
    <Heading paddingY={10}>Adicionar venda</Heading>
    <Formik
      initialValues={{ name: "", category: "" }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
        }, 1000)
      }}
    >
      {(props) => (
        <Form>
          <Stack spacing={5}>
            <Field name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl isRequired isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Nome</FormLabel>
                  <Input {...field} id="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="category" validate={validateCategory}>
              {({ field, form }) => (
                <FormControl isRequired isInvalid={form.errors.category && form.touched.category}>
                  <FormLabel htmlFor="category">Categoria</FormLabel>
                  <Select placeholder="Selecione uma categoria" {...field} id="category">
                    <option value="opção 1">Opção 1</option>
                    <option value="opção 2">Opção 2</option>
                    <option value="opção 3">Opção 3</option>
                  </Select>
                  <FormErrorMessage>{form.errors.category}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="price" validate={validatePrice}>
              {({ field, form }) => (
                <FormControl isRequired isInvalid={form.errors.price && form.touched.price}>
                  <FormLabel htmlFor="price">Preço</FormLabel>
                  <InputGroup {...field}>
                    <InputLeftAddon children="R$" />
                    <NumberInput precision={2} min={0}>
                      <NumberInputField placeholder="3.14" {...field} />
                    </NumberInput>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.price}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="quantity" validate={validateQuantity}>
              {({ field, form }) => (
                <FormControl isRequired isInvalid={form.errors.quantity && form.touched.quantity}>
                  <FormLabel htmlFor="quantity">Quantidade</FormLabel>
                  <NumberInput precision={0} min={0} defaultValue={1}>
                    <NumberInputField {...field} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <FormErrorMessage>{form.errors.quantity}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="date">
              {({ field, form }) => (
                <FormControl isRequired isInvalid={form.errors.date && form.touched.date}>
                  <FormLabel htmlFor="date">Data da venda</FormLabel>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker />
                  </MuiPickersUtilsProvider>
                  <FormErrorMessage>{form.errors.date}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="provider">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.provider && form.touched.provider}>
                  <FormLabel htmlFor="provider">Fornecedor</FormLabel>
                  <Select placeholder="Selecione um fornecedor" {...field} id="provider">
                    <option value="opção 1">Opção 1</option>
                    <option value="opção 2">Opção 2</option>
                    <option value="opção 3">Opção 3</option>
                  </Select>
                  <FormErrorMessage>{form.errors.provider}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="comment">
              {({ field, form }) => (
                <FormControl >
                  <FormLabel htmlFor="comment">Comentário</FormLabel>
                  <Textarea {...field} id="comment" />
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Enviar
        </Button>
          </Stack></Form>
      )}
    </Formik>
  </Box >;
}


// <Field name="category" validate={validateCategory}>
//   {({ field, form }) => (
//     <FormControl isInvalid={form.errors.category && form.touched.category} isRequired>
//       <FormLabel htmlFor="category">Categoria</FormLabel>
//       <Input {...field} id="category" />
//       <FormErrorMessage>{form.errors.category}</FormErrorMessage>
//     </FormControl>
//   )}
// </Field>

// <Heading>Adicionar venda</Heading>
// <FormControl paddingY={10}>
//   <FormLabel>Nome</FormLabel>
// </FormControl>
// <Button type="submit">
//   Enviar
//     </Button>
export default AddProductForm;