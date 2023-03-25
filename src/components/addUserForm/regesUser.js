import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const RegsUserFormik = () => (
    <div>
        <h1 style={{ marginLeft: 400 }}>Regestration By Formik Form </h1>
        <Formik
            initialValues={{ name: '', email: '', password: '', userName: '', conPass: '' }}
            validate={values => {
                const errors = {};
                if (!values.name) {
                    errors.name = 'Required';
                }


                if (!values.userName) {
                    errors.userName = 'Required';
                } else if (
                    !/^[a-zA-Z0-9_ ]*$/i.test(values.userName)
                ) {
                    errors.email = 'Invalid user name : must be without space ';
                }


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


                if (!values.conPass) {
                    errors.conPass = 'Required';
                } else if (values.conPass !== values.password) {
                    errors.conPass = 'Invalid confirmatiomn';
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
                        <h2>Name :</h2>
                        <Field class="form-control" type="text" name="name" />
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div class="col-md-6">
                        <h2>User Name :</h2>
                        <Field class="form-control" type="text" name="userName" />
                        <ErrorMessage name="userName" component="div" />
                    </div>
                    <div class="col-md-12">
                        <h2>Email :</h2>
                        <Field class="form-control" type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div class="col-md-6">
                        <h2>Password :</h2>
                        <Field class="form-control" type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <div class="col-md-6">
                        <h2>Confirm Password :</h2>
                        <Field class="form-control" type="password" name="conPass" />
                        <ErrorMessage name="conPass" component="div" />
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-success" type="submit" disabled={isSubmitting} style={{marginLeft:615}}>Submit</button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
);

export default RegsUserFormik;