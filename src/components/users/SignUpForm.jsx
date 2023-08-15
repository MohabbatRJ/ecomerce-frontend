import React from 'react'
import { Formik, Form } from 'formik'
import RegistrationSchema from './Schema/SignUpSchema'
import FormikControl from './Inputs/FormikControl'
import {NavLink } from 'react-router-dom'

function SignUpForm() {
    const options = [
        { key: 'male', value: 'Male' },
        { key: 'female', value: 'Female' },
        { key: 'other', value: 'Other' },
    ]

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        phone: '',
        dob: '',
    }

    const onSubmit = (values, action) => {
        console.log('Form data', values)
        action.resetForm();
    }
  return (
    <>
          <div className='d-flex flex-column justify-content-center align-items-center text-start py-2 bg-light' style={{ height: '80svh'}}>
              <Formik initialValues={initialValues} validationSchema={RegistrationSchema} onSubmit={onSubmit} >
                  {
                      (formik) => {
                          return (
                              <Form className='w-25'>
                                  <FormikControl control='input' type='name' name='name' label='Username' />
                                  <FormikControl control='input' type='email' name='email' label='Email' />
                                  <div className='row flex-wrap'>
                                      <div className='col'>
                                          <FormikControl control='input' type='password' name='password' label='Password' />
                                      </div>
                                      <div className='col'>
                                          <FormikControl control='input' type='password' name='confirmPassword' label='Confirm Password' />
                                      </div>
                                  </div>
                                  <FormikControl control='input' type='text' name='phone' label='Phone Number' />
                                  <FormikControl control='date' label='Date of Birth' name='dob' />
                                  <FormikControl className='flex-wrap' control='radio' name='gender' label='Gender' options={options} />
                                  <button type='submit' className='btn bg-color text-white my-2' disabled={!formik.isValid}>Submit</button>
                              </Form>
                          )
                      }
                  }
              </Formik>
              <p className='me-5'>
                  If you have an account? <NavLink to="/sign-in">Sign in to Account</NavLink>
              </p>
          </div>
         
    </>
  )
}

export default SignUpForm
