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
import { NumberInputStepper } from '@chakra-ui/number-input';
import { NumberIncrementStepper } from '@chakra-ui/number-input';
import { NumberDecrementStepper } from '@chakra-ui/number-input';
import { Textarea } from '@chakra-ui/textarea';


function AddProviderForm() {
  const AddProviderSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    cel: Yup.string().required('Campo obrigatório')
  })
  return <Box>
    <Heading paddingY={5}>Adicionar fornecedor</Heading>
    <Formik
      initialValues={{ name: "", cel: "", per_price: "", info: "" }}
      validationSchema={AddProviderSchema}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false);
          actions.resetForm();
          let perPriceInput = document.getElementById("per_price");
          perPriceInput.value = "";
          let celInput = document.getElementById("cel");
          celInput.value = "";
        }, 1000)
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
                  <Input as={InputMask} mask="(**) 99999-9999" {...field} id="cel" />
                  <FormErrorMessage>{form.errors.cel}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="per_price" >
              {({ field, form }) => (
                <FormControl isRequired isInvalid={form.errors.per_price && form.touched.per_price}>
                  <FormLabel htmlFor="per_price">Porcentagem adquirida por venda</FormLabel>
                  <NumberInput precision={2} min={0} max={1} step={0.1}>
                    <NumberInputField {...field} id="per_price" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <FormErrorMessage>{form.errors.quantity}</FormErrorMessage>
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
              Submit
          </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  </Box>;
}

export default AddProviderForm;