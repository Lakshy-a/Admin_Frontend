/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  // Initial values
  const initialValues = {
    email: "",
    password: "",
    role: "user", // Default role
  };

  // Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .min(8, "Password must be 8 characters long")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol"),
    role: Yup.string().required("Required"),
  });

  // On form submission
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post("http://localhost:3000/auth/login", {
        email: values.email,
        password: values.password,
        role: values.role,
      });
      alert("Logged In");
      // console.log(response);
      // console.log(values);

      // Store access token in local storage
      localStorage.setItem("accessToken", response.data.token);

      if (response.status === 200) {
        // On successful login, navigate to the home page
        navigate("/home");
      }
    } catch (error) {
      alert("Logged Fialed!");
      console.log(error);
    }
    setSubmitting(false);
  };

  return (
    <div className="mainContainer flex justify-center items-center w-screen h-full bg-[#e5e9ec] ">
      <div className="loginContainer flex flex-col items-center w-96 h-auto bg-white rounded-lg pb-3 mt-12 mb-12">
        <div className="flex justify-center items-center">
          <img className="h-24 w-72" src={logo} alt="Logo" />
          </div>
          <div className="font-bold text-2xl my-1">Log In to Your Account</div>
          <div className="font-light text-sm ">Enter your email & password to login</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email..."
                  className="w-80 h-10 rounded-lg border border-gray-300 p-3 my-4"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password..."
                  className="w-80 h-10 rounded-lg border border-gray-300 p-3"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div>
                <Field
                  as="select"
                  name="role"
                  className="w-80 h-10 rounded-lg border border-gray-300 pl-2 my-4"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </Field>
                <ErrorMessage
                  name="role"
                  component="div"
                  className="text-red-600"
                />
              </div>
              <div className="flex justify-between w-80">
                <div className="flex gap-2">
                  <input type="checkbox" className="check"></input>
                  <label htmlFor="check" className="font-light text-sm">Keep me signed in</label>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-sm text-[#3281FD] hover:text-red-400 cursor-pointer"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="flex justify-center items-center w-80 text-white font-medium h-10 bg-blue-500 hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500 rounded-lg mt-4">
                <button
                  type="submit"
                  className="w-full h-full"
                  disabled={isSubmitting}
                >
                  Login
                </button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="text-xs mt-8 font-light">Or continue with social account</div>
        <div className="flex gap-4 w-5/6 h-10 mt-6 ">
          <div className="w-1/2 rounded-lg flex items-center px-2 gap-2 hover:bg-blue-500 cursor-pointer hover:text-white border">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt541BCjsjuA1Q6kRY7OorKEd26JbPtPY5BHrFWIkpvUs0ualX0DFl5GvKcLbDxdGKMdM&usqp=CAU" className="w-7 h-7"></img>
            <div className="text-sm font-semibold ">Sign in with Google</div>
          </div>
          <div className="w-1/2 rounded-lg flex items-center hover:bg-blue-500 cursor-pointer hover:text-white border">
            <img src="https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png" className="w-16 h-7"></img>
            <div className="text-sm font-semibold ">Sign in with Facebook</div>
          </div>
        </div>
        <div className="flex justify-center items-center w-80 mt-12 ">
          <div className="text-sm font-light cursor-pointer  text-black">
          You don't have an account yet?{" "}
            <Link to="/signup" className="text-blue-500 hover:text-red-500">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
