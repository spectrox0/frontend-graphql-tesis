import React, {useState, useContext} from 'react'; 
import AuthContext from '../../helpers/context/auth-context';
import { Formik } from 'formik';
import {MDBBtn, MDBIcon} from 'mdbreact';
import {useMutation} from '@apollo/react-hooks';
import {LOGIN} from '../../helpers/graphql/mutations/mutations';
import Error from './Error.js';
import Spinner from '../spinner.js';

export default function SignIn ({isSignIn}) {
    
    const  [Login, {data , loading , error}] = useMutation(LOGIN); 
    const {login} = useContext(AuthContext); 
   
    

    return (
        <Formik
        initialValues={{ username: '', password: '' }}
        validate={(values) => {
          var errors ={}
          if(values.username.length>16)
          errors.username ="No more 16 characters"
          if(values.username.length<=0) {
           errors.username="rellene el campo"
          }
          if(values.password.length>16)
          errors.password ="No more 16 characters"
          if(values.password.length<=0) {
           errors.password="rellene el campo"
          }
          return errors;
        }}
        onSubmit={ async (values, { setSubmitting , resetForm}) => {
          console.log('entra');
          setSubmitting(true);
         
            const {data}=  await Login({ variables: {
              username: values.username, 
              password: values.password
            } } )
            if(data){ 
              login( 
                data.login.token ,
                data.login.username, 
                data.login.name, 
                data.login.userId,
                data.login.urlImg
              )
            }
            resetForm();
            setSubmitting(false);
          }
        }
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) =>   (
          <form className={isSignIn?"formSignIn isSignIn":"formSignIn"} onSubmit={handleSubmit}>
             {
               loading? (<Spinner/> ): 
               <> 
                <div className={values.username.length>0? "form-group not-empty form-icon":"form-group form-icon"}> 
          
          <input
            className="form-control"
            id="username"
            type="text"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          <label className="animated-label" htmlFor="username"> Username </label>
          <MDBIcon icon="user" />
          
          </div>
          <div className={values.password.length>0? "form-group not-empty form-icon":"form-group form-icon"}> 
        
          <input
            className="form-control"
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
           <label className="animated-label" htmlFor="password"> Password </label>
           <MDBIcon icon="lock" />
          </div>
         
         
          <MDBBtn className="btn-primary-color"  disabled={isSubmitting} type="submit">
            Submit
          </MDBBtn>
      {error && <span> {error.graphQLErrors.map(({message}) => message)} </span>}</>
             }
             
          </form>
          
        )}
      </Formik>
    )
}