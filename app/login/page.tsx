'use client';
import { TextField, Button, Container, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { AxiosError } from 'axios';
import { useAuthStore } from '../stores/auth.store';
import { login } from '../api/auth.service';
import { ApiHandlerError } from '../api/api.handler';

interface Login {
  email: string;
  password: string;
}
export default function Login() {
  const { setAuth } = useAuthStore();
  const validationSchema = yup.object({
    email: yup.string().required('Email is required'),
    password: yup.string().required('Email is required'),
  });

  const handleSubmit = async (values: Login) => {
    try {
      const response = await login(values);
      setAuth(response.user, response.token);
    } catch (e: any) {
      ApiHandlerError(e as AxiosError);
    }
  };

  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            handleChange,
            handleBlur,
            touched,
            errors,
            setFieldValue,
          }) => (
            <Form>
              <TextField
                label="Email"
                fullWidth
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                margin="normal"
              />
              <TextField
                label="Password"
                fullWidth
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                margin="normal"
              />

              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
}
