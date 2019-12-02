import React, { useState } from 'react';
import { Formik } from 'formik'; 
import {useQuery } from '@apollo/react-hooks';
import {QUERY_CATEGORY} from '../../helpers/graphql/querys/querys';
import {MDBBtn} from 'mdbreact';
import Spinner from './../spinner'

export default function Conversations({options , categories}) {
  const [urlImg , setUrlImg] = useState('');
  const { data , loading , error} = useQuery(QUERY_CATEGORY);

  const Categories = ({array}) => {
      
   return array.map((value, key)=> {
   return <option key={key}> {value.name}</option>
   })

  }
  return (
  <section className={options===2? "create active": "create"}>
    <Formik
        initialValues={{ title: '' , category: ''  }}
        validate={(values) => {
          var errors ={}
          
          return errors;
        }}
        onSubmit={ async (values, { setSubmitting , resetForm}) => {
        
            setSubmitting(true);
         
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
          <form onSubmit={handleSubmit}>
             {
               loading? (<Spinner/> ): 
               <> 
                <div className={values.title.length>0? "form-group not-empty":"form-group"}> 
          
          <input
            className="form-control"
            id="title"
            type="text"
            name="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
          />
          <label className="animated-label" htmlFor="title"> Titulo </label>
    
          
          </div>
          <div className={values.category.length>0? "form-group not-empty ":"form-group"}> 
        
          <select
            className="form-control"
            id="category"
            name="category"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.category}
             > {categories && <Categories array ={categories} /> }
           </select>
           <label className="animated-label" htmlFor="category"> Category </label>
         
          </div>
         
         
          <MDBBtn className="btn-primary-color"  disabled={isSubmitting} type="submit">
            Submit
          </MDBBtn>
      
             </>}
          </form>
          
        )}
      </Formik>
  </section> )

}