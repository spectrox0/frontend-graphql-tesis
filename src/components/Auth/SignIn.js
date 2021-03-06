import React, { useState, useContext } from "react";
import { Formik } from "formik";
import { MDBBtn, MDBIcon } from "mdbreact";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN } from "../../helpers/graphql/mutations";
import Spinner from "../spinner.js";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";

export default function SignIn({ isSignIn }) {
  const [Login, { data, loading, error }] = useMutation(LOGIN);
  const dispatch = useDispatch();
  const alert = useAlert();
  const login = token => {
    localStorage.setItem("token", token);
    dispatch({
      type: "LOGIN",
      payload: {
        token: token
      }
    });
  };
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={values => {
        var errors = {};
        if (values.username.length > 30)
          errors.username = "No more 30 characters";
        if (values.username.length <= 0) {
          errors.username = "required";
        }

        if (values.password.length <= 0) {
          errors.password = "required";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        try {
          const { data } = await Login({
            variables: {
              username: values.username,
              password: values.password
            }
          });
          if (data) {
            login(data.login.token);
          }
        } catch (err) {
          alert.error("Error");
        }
        resetForm();
        return setSubmitting(false);
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
      }) => (
        <form
          className={isSignIn ? "formSignIn isSignIn" : "formSignIn"}
          onSubmit={handleSubmit}
        >
          {loading ? (
            <Spinner />
          ) : (
            <>
              <img src={require("../../assets/img/graphql.svg")} alt="" />
              <div
                className={
                  values.username.length > 0
                    ? "form-group not-empty form-icon"
                    : "form-group form-icon"
                }
              >
                <input
                  className="form-control"
                  id="username"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                />
                <label className="animated-label" htmlFor="username">
                  {" "}
                  Username{" "}
                </label>
                <MDBIcon icon="user" />
              </div>
              <div
                className={
                  values.password.length > 0
                    ? "form-group not-empty form-icon"
                    : "form-group form-icon"
                }
              >
                <input
                  className="form-control"
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <label className="animated-label" htmlFor="password">
                  {" "}
                  Password{" "}
                </label>
                <MDBIcon icon="lock" />
              </div>

              <MDBBtn
                className="btn-primary-color"
                disabled={isSubmitting}
                type="submit"
              >
                Submit
              </MDBBtn>
              {error && (
                <span>
                  {" "}
                  {error.graphQLErrors.map(({ message }) => message)}{" "}
                </span>
              )}
            </>
          )}
        </form>
      )}
    </Formik>
  );
}
