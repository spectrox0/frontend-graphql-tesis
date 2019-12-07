import React, { useState, useContext } from "react";
import { Formik } from "formik";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { QUERY_CATEGORY } from "../../helpers/graphql/querys/querys";
import { CREATE_POST } from "../../helpers/graphql/mutations/mutations";
import { MDBBtn, MDBIcon } from "mdbreact";
import Spinner from "./../spinner";
import UploadImage from "../uploadImage.js";
import Error from "../Auth/Error";
import AuthContext from "../../helpers/context/auth-context";

export default function Conversations({ options, categories }) {
  const { userId } = useContext(AuthContext);
  const [urlImg, setUrlImg] = useState("");
  const { data, loading, error } = useQuery(QUERY_CATEGORY);
  const [createPost, postData] = useMutation(CREATE_POST);
  const [isLoad, setIsLoad] = useState(false);

  const handlingLoadImage = value => {
    setIsLoad(value);
  };
  const onImageUrl = url => {
    setUrlImg(url);
  };

  const Categories = ({ array }) => {
    return array.map((value, key) => {
      return (
        <option value={value} key={key}>
          {" "}
          {value.replace("_", "")}
        </option>
      );
    });
  };
  return (
    <section
      className={options === 2 ? "create active scroll" : "create scroll"}
    >
      <Formik
        initialValues={{ title: "", category: "" }}
        validate={values => {
          var errors = {};
          if (values.title.trim().length < 4) {
            errors.title = "More of 4 character";
          } else if (values.title.trim().length > 50) {
            errors.title = "No more of 50 characters";
          }
          if (values.category.length === 0) {
            errors.category = "select category please";
          }
          if (!userId) {
            errors.user = "Need auth";
          }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          createPost({
            variables: {
              postInput: {
                title: values.title,
                category: values.category,
                creator: userId,
                urlImg: urlImg
              }
            }
          });
          resetForm();
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
          /* and other goodies */
        }) =>
          postData.loading ? (
            <Spinner />
          ) : (
            <form onSubmit={handleSubmit}>
              {loading ? (
                <Spinner />
              ) : (
                <>
                  <div
                    className={
                      values.title.length > 0
                        ? "form-group not-empty"
                        : "form-group"
                    }
                  >
                    <input
                      className="form-control"
                      id="title"
                      type="text"
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.username}
                    />
                    <label className="animated-label" htmlFor="title">
                      {" "}
                      Titulo{" "}
                    </label>
                  </div>
                  <Error touched={touched.title} message={errors.title}>
                    {" "}
                  </Error>
                  <div className="form-group">
                    <div className="select">
                      <select
                        className="select-text"
                        id="category"
                        name="category"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.category}
                        required
                      >
                        <option value="" disabled></option>
                        {categories && <Categories array={categories} />}
                      </select>
                      <span className="select-highlight"></span>
                      <span className="select-bar"></span>
                      <label className="select-label">Category</label>
                    </div>
                  </div>
                  <Error touched={touched.category} message={errors.category}>
                    {" "}
                  </Error>
                  <div className="form-group">
                    {urlImg.length > 0 && !isLoad && (
                      <MDBBtn
                        htmlFor="uploadImagePost"
                        className="uploadImagePost"
                        tag={props => <label {...props} />}
                      >
                        <img src={urlImg} alt="" />
                      </MDBBtn>
                    )}
                    {urlImg.length > 0 && isLoad && (
                      <MDBBtn
                        htmlFor="uploadImagePost"
                        className="uploadImagePost"
                        tag={props => <label {...props} />}
                      >
                        <Spinner />
                      </MDBBtn>
                    )}
                    {urlImg.length <= 0 && isLoad && (
                      <MDBBtn
                        htmlFor="uploadImagePost"
                        className="uploadImagePost"
                        tag={props => <label {...props} />}
                      >
                        <Spinner />
                      </MDBBtn>
                    )}
                    {urlImg.length <= 0 && !isLoad && (
                      <MDBBtn
                        htmlFor="uploadImagePost"
                        className="uploadImagePost"
                        tag={props => <label {...props} />}
                      >
                        <span> Load Image</span>
                        <MDBIcon icon="upload" />
                      </MDBBtn>
                    )}

                    <UploadImage
                      id="uploadImagePost"
                      onImageUrl={onImageUrl}
                      handlingLoadImage={handlingLoadImage}
                    />
                  </div>

                  <MDBBtn
                    className="btn-primary-color"
                    disabled={isSubmitting}
                    type="submit"
                  >
                    Submit
                  </MDBBtn>
                </>
              )}
            </form>
          )
        }
      </Formik>
    </section>
  );
}
