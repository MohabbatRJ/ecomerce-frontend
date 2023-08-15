import { Form, Formik } from 'formik';
import React from 'react'
import { NavLink } from 'react-router-dom';
import FormikControl from './Inputs/FormikControl';
import { LoginSchema } from './Schema/LoginSchema';



function LoginForm() {
    const initialValues = {
        email: '',
        password: '',
    }

    const onSubmit = (values, action) => {
        console.log('Form data', values)
        action.resetForm();
    }
  
    
  return (
       <>
      <div className='d-flex flex-column justify-content-center align-items-center text-start py-2 bg-light' style={{ height: '80svh'}}>
          <Formik initialValues={initialValues} validationSchema={LoginSchema} onSubmit={onSubmit} >
              {
                  (formik) => {
                      return (
                          <Form className='w-25'>
                              <FormikControl control='input' type='email' name='email' label='Email' />
                              <FormikControl control='input' type='password' name='password' label='Password' />
                              <button type='submit' className='btn bg-color text-white my-2' disabled={!formik.isValid}>Submit</button>
                          </Form>
                      )
                  }
              }
          </Formik>

          
          <p>
              If you dont have an account? <NavLink to="/sign-up">Create an Account</NavLink>
          </p>
          </div>
      </>
  )
}

export default LoginForm
