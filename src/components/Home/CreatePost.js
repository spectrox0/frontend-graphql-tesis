import React, { useState } from 'react';
import { Formik } from 'formik'; 
import {useQuery, useMutation } from '@apollo/react-hooks';
import {QUERY_CATEGORY} from '../../helpers/graphql/querys/querys';
import {CREATE_POST} from '../../helpers/graphql/mutations/mutations'
import {MDBBtn, MDBIcon} from 'mdbreact';
import Spinner from './../spinner';
import UploadImage from '../uploadImage.js';
import Error from '../Auth/Error';

export default function Conversations({options , categories}) {
  const [urlImg , setUrlImg] = useState('');
  const { data , loading , error} = useQuery(QUERY_CATEGORY);
  const [createPost , asda]  = useMutation(CREATE_POST);
   const  [isLoad, setIsLoad] = useState(false);

   const handlingLoadImage = (value) => {
    setIsLoad(value);
  }
  const onImageUrl = (url) => {
    setUrlImg(url);
  } 

  const Categories = ({array}) => {
      
   return array.map((value, key)=> {
   return <option value={value.name} key={key}> {value.name}</option>
   })

  }
  return (
  <section className={options===2? "create active scroll": "create scroll"}>
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
        
          <div className="select">
          <select 
          className="select-text"
          id="category"
          name="category"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.category}
          required>
						<option value="" disabled selected></option>
            {categories && <Categories array ={categories} /> }
					</select>
					<span className="select-highlight"></span>
					<span className="select-bar"></span>
					<label className="select-label">Category</label>
				</div>
         
          </div>
          <div className="form-group"> 
          {(urlImg.length>0 && !isLoad  )&& <MDBBtn htmlFor="uploadImagePost"  className="uploadImagePost" tag={(props)=> <label {...props} />} > 
           <img src={urlImg} alt=""/>
           
           </MDBBtn> 
            }
            {(urlImg.length>0 &&  isLoad  )&& <MDBBtn htmlFor="uploadImagePost"  className="uploadImagePost" tag={(props)=> <label {...props} />} > 
            <Spinner />
           </MDBBtn> 
            }
             {(urlImg.length<=0 && isLoad) && <MDBBtn htmlFor="uploadImagePost"  className="uploadImagePost" tag={(props)=> <label {...props} />} > 
               
           <Spinner />
            
           </MDBBtn>   }
           {(urlImg.length<=0 && !isLoad) && <MDBBtn htmlFor="uploadImagePost"  className="uploadImagePost" tag={(props)=> <label {...props} />} > 
           <span> Load Image</span>
               <MDBIcon icon="upload" /> 
               </MDBBtn>   }

               <UploadImage id="uploadImagePost" 
            onImageUrl={onImageUrl} 
            handlingLoadImage={handlingLoadImage}
            />
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