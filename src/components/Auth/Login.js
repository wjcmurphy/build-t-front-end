import React, { useState, useEffect, useContext } from "react";
// import { useHistory } from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";
import { Formik, Field, Form, ErrorMessage } from "formik";
// import has from "lodash/has";
// import { DataContext } from "../../context/DataContext";
// import AuthService from "../../services/AuthService";
// import UserService from "../../services/UserService";
// import AppHelper from "../../helpers/AppHelper";
import { withStyles } from "@material-ui/core/styles";
import { login } from "../../assets/styles/Login.styles";
import { Box, Button, Grid, Typography, TextField } from "@material-ui/core";
import axios from "axios";
import * as Yup from "yup";

const API = process.env.REACT_APP_API;

const Login = (props) => {
  const marginTop = { marginTop: 20 };
  const marginTopField = { marginTop: 12 };

  const { classes } = props;

//  const history = useHistory();

//  const [loading, setLoading] = useState(false);
  const [requestFailed, setRequestFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [status, setStatus] = useState({success: false, msg: ''});
  // const { data, setData } = useContext(DataContext);
  // console.log(data);

  const [error, setError] = useState(null);
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
    return (
      <MuiAlert
        elevation={6}
        variant="filled"
        {...props}
        onClose={() => closeHandle(props.severity)}
        className={classes.error}
      />
    );
  };

  // const initialValues = {
  //   email: "",
  //   password: "",
  // };

  const LoginSchema = Yup.object().shape({
    username: Yup.string().email("Enter valid email").required("Required"),
    password: Yup.string()
      .min(8, "Password minimum length should be 8")
      .required("Required"),
  });

  useEffect(() => {
    if (!setRequestFailed) {
      setErrorMessage("");
    }
  }, [requestFailed]);

  
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ok, msg});
  };
  
  // const onSubmit = async (values) => {
  //   const payload = {
  //     email: values.email,
  //     password: values.password,
  //   };
  //   await login(payload);
  // };

  const handleOnSubmit = async (values, actions) => {
    
    axios({
      method: "POST",
      url: `${API}/api/v1/auth/login`,
      data: values
    })
      .then(response => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Thanks!");
      })
      .catch(error => {
        setError(error.response.data.message)
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
      });
};

  // const login = async (payload) => {
  //   let err = [];
  //   setLoading(true);

  //   try {
  //     setRequestFailed(false);

  //     const res = await AuthService.login(payload);
  //     const accessToken = res.data.access_token;

  //     UserService.setAccessToken(accessToken);

  //     const getUser = await UserService.me();
  //     if (!getUser || !has(getUser, "data")) {
  //       throw { message: "Cannot get user information" };
  //     }

  //     const newData = {
  //       auth_token: accessToken,
  //       user: getUser.data
  //     }
  //     setData(newData);

  //     setLoading(false);

  //     history.push("/");
      
  //   } catch (error) {
  //     if (error.response) {
  //       err = error.response.data;
  //     } else {
  //       err = error;
  //     }
  //     setLoading(false);
  //     setRequestFailed(true);
  //     setErrorMessage(AppHelper.getError(err));
  //   }
  // };

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
          {requestFailed && errorMessage && (
            <Box display="flex" justifyContent="center" marginTop={5}>
              <Alert severity="error">
                {typeof errorMessage === "string" ? (
                  <Box component="span">{errorMessage}</Box>
                ) : (
                  Object.keys(errorMessage).map((key) => (
                    <Box key={key} component="span">
                      {errorMessage[key]}
                    </Box>
                  ))
                )}
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
              initialValues={{username:"", password:"" }}
              onSubmit={handleOnSubmit}
              validationSchema={LoginSchema}
              
            >
              {(props) => (
                <Form style={marginTop}>
                  <Field
                    as={TextField}
                    fullWidth
                    name="username"
                    label="Email"
                    placeholder="Enter your email"
                    helperText={<ErrorMessage name="username" />}
                    style={marginTopField}
                  />

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

                  <Box textAlign="center" marginTop={marginTop}>
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={props.isSubmitting}
                      color="secondary"
                      className={classes.button}
                      size="large"
                    >
                      {props.isSubmitting ? "Loading" : "Login"}
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </div>
      </Grid>
  );
};

export default withStyles(login)(Login);
