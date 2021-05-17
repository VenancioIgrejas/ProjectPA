import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Stack, Heading, Box } from '@chakra-ui/layout';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Input } from '@chakra-ui/input';
import * as Yup from 'yup';
import { Button } from '@chakra-ui/button';
import InputMask from "react-input-mask";
import { NumberInputField } from '@chakra-ui/number-input';
import { NumberInput } from '@chakra-ui/number-input';
import { Textarea } from '@chakra-ui/textarea';
import api from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NumberInputStepper } from '@chakra-ui/number-input';
import { NumberIncrementStepper } from '@chakra-ui/number-input';
import { NumberDecrementStepper } from '@chakra-ui/number-input';


function AddProviderForm({ userId }) {
  const AddProviderSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    cel: Yup.string().required('Campo obrigatório'),
    per_price: Yup.number().min(0, 'Valor inválido').max(1, 'Valor inválido').required('Campo obrigatório')
  })
  return <Box>
    <Heading paddingY={5}>Adicionar fornecedor</Heading>
    <ToastContainer />
    <Formik
      initialValues={{ name: "", cel: "", per_price: "", info: "" }}
      validationSchema={AddProviderSchema}
      onSubmit={(values, actions) => {
        api.post('/provider', { ...values, per_price: parseFloat(values.per_price), userId: userId })
          .then((response) => toast.success("Fornecedor registado com sucesso"))
          .catch((e) => toast.error('Ocorreu um erro'));
        actions.setSubmitting(false);
        actions.resetForm();
      }}
    >
      {(props) => (
        <Form>
          <Stack>
            <Field name="name" >
              {({ field, form }) => (
                <FormControl isRequired isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Nome</FormLabel>
                  <Input {...field} id="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="cel" >
              {({ field, form }) => (
                <FormControl isRequired isInvalid={form.errors.cel && form.touched.cel}>
                  <FormLabel htmlFor="cel">Celular</FormLabel>
                  <Input as={InputMask} mask="(99) 99999-9999" {...field} id="cel" />
                  <FormErrorMessage>{form.errors.cel}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="per_price" >
              {({ field, form }) => (
                <FormControl isRequired isInvalid={form.errors.per_price && form.touched.per_price}>
                  <FormLabel htmlFor="per_price">Porcentagem adquirida por venda</FormLabel>
                  <NumberInput min={0} max={1} precision={2} step={0.1} value={field.value} onChange={value => form.setFieldValue(field.name, value)}>
                    <NumberInputField {...field} id="per_price" placeholder={0.5} />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <FormErrorMessage>{form.errors.per_price}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="info">
              {({ field, form }) => (
                <FormControl >
                  <FormLabel htmlFor="info">Informações adicionais</FormLabel>
                  <Textarea {...field} id="info" />
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
          </Stack>
        </Form>
      )}
    </Formik>
  </Box>;
}

export default AddProviderForm;