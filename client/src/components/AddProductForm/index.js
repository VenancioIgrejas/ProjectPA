import 'date-fns';
import { Button } from '@chakra-ui/button';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/input';
import { Box, Heading, Stack } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Textarea } from '@chakra-ui/textarea';
import { NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/number-input';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import * as Yup from 'yup';
import api from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProductForm({ userId }) {
  const [providers, setProviders] = useState([]);
  const [categories, setCategories] = useState([]);

  async function fetchProviders() {
    try {
      const response = await api.get('/provider');
      setProviders(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCategories() {
    try {
      const response = await api.get('/category');
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProviders();
    fetchCategories();
  }, [])

  const AddProductSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    category: Yup.string().required('Campo obrigatório'),
    price: Yup.number().required('Campo obrigatório'),
    quantity: Yup.number().required('Campo obrigatorio'),
    date_in: Yup.date('Data inválida').required('Campo obrigatório')
  })

  return <Box>
    <Heading paddingY={5}>Adicionar venda</Heading>
    <ToastContainer />
    <Formik
      initialValues={{ name: "", category: "", price: "", quantity: 1, provider: "", comment: "", date_in: "" }}
      validationSchema={AddProductSchema}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values, null, 2));
        console.log("enviando: ", { ...values, userId: userId });
        api.post('/product', { ...values, userId })
          .then(resp => toast.success("Registro criado com sucesso"))
          .catch(e => toast.error('Ocorre um erro'));
        actions.setSubmitting(false);
      }}
    >
      {(props) => (
        <Form>
          <Stack spacing={5}>
            <Field name="name" >
              {({ field, form }) => (
                <FormControl isRequired isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Nome</FormLabel>
                  <Input {...field} id="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="category" >
              {({ field, form }) => (
                <FormControl isRequired isInvalid={form.errors.category && form.touched.category}>
                  <FormLabel htmlFor="category">Categoria</FormLabel>
                  <Select placeholder="Selecione uma categoria" {...field} id="category">
                    {categories.map(category => <option value={category.id} key={category.id}>
                      {category.name}
                    </option>)}
                  </Select>
                  <FormErrorMessage>{form.errors.category}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="price" >
              {({ field, form }) => (
                <FormControl isRequired isInvalid={form.errors.price && form.touched.price}>
                  <FormLabel htmlFor="price">Preço</FormLabel>
                  <InputGroup {...field}>
                    <InputLeftAddon children="R$" />
                    <NumberInput precision={2} min={0} id="mytest">
                      <NumberInputField placeholder="3.14" {...field} id="price" />
                    </NumberInput>
                  </InputGroup>
                  <FormErrorMessage>{form.errors.price}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="quantity" >
              {({ field, form }) => (
                <FormControl isRequired isInvalid={form.errors.quantity && form.touched.quantity}>
                  <FormLabel htmlFor="quantity">Quantidade</FormLabel>
                  <NumberInput precision={0} min={0} defaultValue={1} onChange={(value) => form.setFieldValue("quantity", value)} >
                    <NumberInputField {...field} id="quantity" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <FormErrorMessage>{form.errors.quantity}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="date_in">
              {({ field, form }) => (
                <FormControl isRequired isInvalid={form.errors.date_in && form.touched.date_in}>
                  <FormLabel htmlFor="date_in">Data da venda</FormLabel>
                  <DatePicker
                    id="date_in"
                    dateFormat="dd/MM/yyyy"
                    selected={field.value}
                    onChange={value => form.setFieldValue("date_in", value)}
                  />
                  <FormErrorMessage>{form.errors.date_in}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="provider">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.provider && form.touched.provider}>
                  <FormLabel htmlFor="provider">Fornecedor</FormLabel>
                  <Select placeholder="Selecione um fornecedor" {...field} id="provider">
                    {providers.map(provider => <option value={provider.id} key={provider.id}>
                      {provider.name}
                    </option>)}
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

export default AddProductForm;