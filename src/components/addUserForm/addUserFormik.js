import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const AddUserFormik = () => (
  <div>
    <h1 style={{marginLeft:450}}>Login By Formik Form </h1>
    <br/>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }



        if (!values.password) {
          errors.password = 'Required';
        } else if (
          !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i.test(values.password)
        ) {
          errors.password = 'Invalid password : length at lest 8 ';
        }
        return errors;

      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form class="row g-3">
          <div class="col-md-6">
            <h2 class="form-label">Email :</h2>
            <Field class="form-control" type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div class="col-md-6">
            <h2>Password :</h2>
            <Field class="form-control" type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div class="col-md-12">
          <button class="btn btn-success" type="submit" disabled={isSubmitting} style={{marginLeft:615}}>Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default AddUserFormik;