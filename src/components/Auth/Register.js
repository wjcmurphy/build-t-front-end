import React, { useState, useEffect } from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";

// import AuthService from "../../services/AuthService";

// import AppHelper from "../../helpers/AppHelper";

import { withStyles } from "@material-ui/core/styles";
import { register } from "../../assets/styles/Register.styles";

import {
  Box,
  Button,
  Grid,
  Typography,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  TextField,
  FormHelperText,
  Radio,
  Checkbox,
} from "@material-ui/core";

import * as Yup from "yup";
// import { render } from "@testing-library/react";

const API = process.env.REACT_APP_API;

const Register = (props) => {
  const marginTop = { marginTop: 20 };
  const marginTopField = { marginTop: 12 };

  const { classes } = props;

  const [loading, setLoading] = useState(false);
  const [requestFailed, setRequestFailed] = useState(false);

  const [errorMessage, setErrorMessage] = useState({});
  const [status, setStatus] = useState({success: false, msg: ''});

  
  const closeHandle = (severity) => {
    switch (severity) {
      case 'error':
        setRequestFailed(!requestFailed);
        break;
      case 'success':
        const success = !(status.success);
        setStatus({success, msg: ''});
        break;
    
      default:
        break;
    }
  }

  const Alert = (props) => {
    return <MuiAlert 
      elevation={6} 
      variant="filled" 
      {...props} 
      onClose={() => closeHandle(props.severity)}
      className={classes.error}
    />;
  };

  // const initialValues = {
  //   name: '',
  //   email: '',
  //   user_type: '',
  //   password: '',
  //   confirmPassword: '',
  //   termsAndConditions: false,
  // };

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    user_type: Yup.string()
      .oneOf(["client", "vendor"], "Required")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password not matched")
      .required("Required"),
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      "Accept terms & conditions"
    ),
  });

  useEffect(() => {
    if (!setRequestFailed) {
      setErrorMessage("");
    }
  }, [requestFailed]);

  // const onSubmit = (e) => {
  //   //e.preventDefault();
  //   const { name, email, user_type, password, confirmPassword } = initialValues;
  //   if (password !== confirmPassword) {
  //     this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
  //   } else {
  //     const newUser = {
  //       name,
  //       email,
  //       password,
  //       user_type
  //     };
  //     submitRegistration(newUser);
  //   }
  // };

  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ok, msg});
  };

  const handleOnSubmit = async (values, actions) => {
    
        axios({
          method: "POST",
          url: `${API}/api/v1/auth/register`,
          data: values
        })
          .then(response => {
            actions.setSubmitting(false);
            actions.resetForm();
            handleServerResponse(true, "Thanks!");
          })
          .catch(error => {
            actions.setSubmitting(false);
            handleServerResponse(false, error.response.data.error);
          });
  };

  //   if (!response.ok) {
  //     setErrorMessage(data);
  //     setErrorMessage(data.detail);
  //   } else {
  //     console.log(data);
  //   }
  // };


  // const onSubmit = async (values, props) => {
  //   const payload = {
  //     name: values.name,
  //     email: values.email,
  //     user_type: values.user_type,
  //     password: values.password,
  //     confirm_password: values.confirmPassword,
  //   };
  //   await register(payload, props);
  // };

  //const register = async (payload, props) => {
    
    // let err = [];
    // setLoading(true);
    // try {
    //   setRequestFailed(false);
      
    //   const res = await AuthService.register(payload);
    //   setStatus({success: true, msg: res.data.message});

    //   setTimeout(() => {
    //     props.setSubmitting(false);
    //     props.resetForm();
    //   }, 4000);
    // } catch (error) {
    //   if (error.response) {
    //     err = error.response.data;
    //   } else {
    //     err = error;
    //   }
    //   setLoading(false);
    //   setRequestFailed(true);
    //   setStatus({success: false, msg: ''});
    //   setErrorMessage(AppHelper.getError(err));
    // }
    //}


    return (
      <Grid>
        <Grid item xs={12} className={classes.gridTitle}>
          <Typography variant="h3">
            Let's start something
            <br />
            completely new{" "}
            <Box component="span" className={classes.subText}>
              together{" "}
            </Box>
          </Typography>
        </Grid>

        <div style={{ width: "80%", margin: "auto" }}>
          {requestFailed && (
            <Box
              display="flex"
              justifyContent="center"
              marginTop={5}
            >
              <Alert severity="error">
                {Object.keys(errorMessage).map((key) => (
                  <Box component="span">{errorMessage[key]}</Box>
                ))}
              </Alert>
            </Box>
          )}

          {status.success && (
            <Box
              display="flex"
              justifyContent="center"
              marginTop={5}
            >
              <Alert severity="success">
                {status.msg}
              </Alert>
            </Box>
          )}

          <Box
            justifyContent="center"
            alignItems="center"
            display="flex"
            marginTop="40px"
            marginBottom="150px"
          >
            <Formik
              initialValues={{name:"", email:"", user_type:"", password:"", confirmPassword:"", termsAndConditions:false }}
              onSubmit={handleOnSubmit}
              validationSchema={RegisterSchema}
 
            >
              {(props) => (
                <Form style={marginTop}>
                  <Field
                    as={TextField}
                    fullWidth
                    name="name"
                    label="Name"
                    placeholder="Enter your name"
                    helperText={<ErrorMessage name="name" />}
                  />

                  <Field
                    as={TextField}
                    fullWidth
                    name="email"
                    label="Email"
                    placeholder="Enter your email"
                    helperText={<ErrorMessage name="email" />}
                    style={marginTopField}
                  />

                  <FormControl component="fieldset" style={{ marginTop: "30px" }}>
                    <FormLabel component="legend">Role</FormLabel>
                    <Field
                      as={RadioGroup}
                      aria-label="user_type"
                      name="user_type"
                      style={{ display: "initial" }}
                    >
                      <FormControlLabel
                        value="client"
                        control={<Radio size="small" />}
                        label="Client"
                      />
                      <FormControlLabel
                        value="vendor"
                        control={<Radio size="small" />}
                        label="Vendor"
                      />
                    </Field>
                  </FormControl>
                  <FormHelperText>
                    <ErrorMessage name="user_type" />
                  </FormHelperText>

                  <Field
                    as={TextField}
                    fullWidth
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    helperText={<ErrorMessage name="password" />}
                    style={marginTopField}
                  />

                  <Field
                    as={TextField}
                    fullWidth
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    helperText={<ErrorMessage name="confirmPassword" />}
                    style={marginTopField}
                  />

                  <FormControlLabel
                    control={<Field as={Checkbox} name="termsAndConditions" />}
                    label="I accept the terms and conditions."
                    style={marginTop}
                  />
                  <FormHelperText>
                    <ErrorMessage name="termsAndConditions" />
                  </FormHelperText>

                  <Box textAlign="center" marginTop={marginTop}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={props.isSubmitting}
                      color="secondary"
                      className={classes.button}
                      size="large"
                    >
                      {props.isSubmitting ? "Loading" : "Register"}
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </div>
      </Grid>
    );
              

}

export default withStyles(register)(Register);
