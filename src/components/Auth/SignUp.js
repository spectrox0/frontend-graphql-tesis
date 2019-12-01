import React, {useState, useContext} from 'react'; 
import { Formik } from 'formik';
import {MDBBtn , MDBIcon , MDBWaves} from 'mdbreact';
import UploadImage from '../uploadImage.js';
import Spinner from '../spinner.js';
import AuthContext from '../../helpers/context/auth-context';
import {useMutation} from '@apollo/react-hooks';
import {LOGIN, CREATE_USER} from '../../helpers/graphql/mutations/mutations';
import Error from './Error.js';
export default function SignIn ({isSignIn}) {
    
  
  const {login} = useContext(AuthContext); 
    const [urlImg, setUrlImg] = useState("");
    const [isLoad, setIsLoad] = useState(false);
   const [createUser, {data, loading, error}] = useMutation(CREATE_USER);
   const [Login , loginRes] = useMutation(LOGIN);
    const handlingLoadImage = (value) => {
      setIsLoad(value);
    }
    const onImageUrl = (url) => {
      setUrlImg(url);
    }
    return (
        <Formik
        initialValues={{ 
          email: '',
          password: '' ,
          password2:'', 
          username:'', 
          name:''}}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          } 
          if(values.password.length===0) {
            errors.password = "password required"
          }
          if(values.password.length>0 && values.password2.length>0 && values.password2!==values.password){
            errors.password2= 'password not coincide';
          }
          if (!values.username) {
            errors.username = 'Required';}
            else if(values.username.length<4) {
              errors.username= "more 4 characters"
            }
            if (!values.name) {
              errors.name = 'Required';}
              else if(values.name.length<4) {
                errors.name= "more 4 characters"
              }

          return errors;
        }}
        onSubmit={ async (values, { setSubmitting, resetForm }) => { 
           setSubmitting(true);
           const res = await createUser({
             variables: {
               userInput: {
                 email: values.email, 
                 password: values.password,
                 name: values.name,
                 urlImg: urlImg, 
                 username: values.username
               }
             }
           }); 
           if(res.data) {
                const {data} = await Login({
                  variables: {
                    username: values.username,
                    password: values.password
                  }
                });
                if(data) {
                  login( 
                    data.login.token ,
                    data.login.username, 
                    data.login.name, 
                    data.login.userId,
                    data.login.urlImg
                  )
                }

           }
           setSubmitting(true);
         
        }}
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
        }) => (loading || loginRes.loading)? <Spinner/> :(
          <form className={isSignIn?"formSignUp isSignIn":"formSignUp"} onSubmit={handleSubmit}>
            <div className="form-group" > 
          
          {urlImg.length>0 && <MDBBtn htmlFor="uploadImage"  className="loadPhoto" tag={(props)=> <label {...props} />} > 
           <img src={urlImg} alt=""/>
           </MDBBtn> 
            }
             {(urlImg.length<=0 && isLoad) && <MDBBtn htmlFor="uploadImage"  className="loadPhoto" tag={(props)=> <label {...props} />} > 
               
           <Spinner />
            
           </MDBBtn>   }
           {(urlImg.length<=0 && !isLoad) && <MDBBtn htmlFor="uploadImage"  className="loadPhoto" tag={(props)=> <label {...props} />} > 
               
               <MDBIcon icon="upload" /> 
               </MDBBtn>   }
          

          
          <UploadImage id="uploadImage" 
            onImageUrl={onImageUrl} 
            handlingLoadImage={handlingLoadImage}
            />
         
       
           
            </div>
          
            <div className={values.email.length>0? "form-group not-empty":"form-group"}>  
            <input
              className="form-control"
              id="email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <label className="animated-label" htmlFor="email"> Email </label>
            </div>
            <Error touched={touched.email} message={errors.email}> </Error>
            <div className={values.password.length>0? "form-group not-empty":"form-group"}>  
            <input
              className="form-control"
              type="password"
              name="password"
              id="passwordRegister"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <label className="animated-label" htmlFor="passwordRegister"> Password </label>
            </div>
            <Error touched={touched.password} message={errors.password}> </Error>
            <div className={values.password2.length>0? "form-group not-empty":"form-group"}>  
            <input
              className="form-control"
              type="password"
              name="password2"
              id="passwordRegister2"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password2}
            />
            <label className="animated-label" htmlFor="passwordRegister2"> Repeat password </label>
            </div>
            <Error touched={touched.password2} message={errors.password2}> </Error>
            <div className={values.username.length>0? "form-group not-empty":"form-group"}>  
            <input
              className="form-control"
              type="text"
              name="username"
              id="usernameRegister"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <label className="animated-label" htmlFor="usernameRegister"> Username</label>
            </div>
            <Error touched={touched.username} message={errors.username}> </Error>
            <div className={values.name.length>0? "form-group not-empty":"form-group"}>  
            <input
              className="form-control"
              type="text"
              name="name"
              id="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <label className="animated-label" htmlFor="name"> Name</label>
            </div>
            <Error touched={touched.name} message={errors.name}> </Error>
            <MDBBtn className="btn-primary-color" type="submit">
              Submit
            </MDBBtn>
          </form>
        )}
      </Formik>
    )
}