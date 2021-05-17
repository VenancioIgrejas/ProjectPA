import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Heading, Stack, Box } from '@chakra-ui/layout';
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/form-control';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import api from '../../services/api';


function AddCategoryForm({ userId }) {
  return <Box>
    <Heading paddingY={5}>Adicionar categoria</Heading>
    <ToastContainer />
    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values, actions) => {
        api.post('/category', { ...values, userId })
          .then(resp => toast.success('Categoria criada com sucesso'))
          .catch(e => toast.error('Ocorreu um erro'))
        actions.setSubmitting(false)
        actions.resetForm();
      }}
    >
      {(props) => (
        <Form>
          <Stack spacing={5}>
            <Field name="name" >
              {({ field, form }) => (
                <FormControl isRequired isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Nome</FormLabel>
                  <Input {...field} id="name" placeholder="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
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

export default AddCategoryForm;