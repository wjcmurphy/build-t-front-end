import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  ButtonGroup,
  Link,
  Box,
  useMediaQuery,
} from "@material-ui/core";

import Swal from 'sweetalert2';

import { useHistory } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";
import { DataContext } from "../context/DataContext";

import { colors } from "../components/theme/colors";

import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "../assets/styles/Header.styles";

import logo from "../assets/images/buildt-logo.png";

import UserService from "../services/UserService";

const Header = () => {
  const options = ["About us", "How to use", "Contact us"];
  const [activeLink, setActiveLink] = useState("About us");

  const { data, setData } = useContext(DataContext);
  (data.auth_token) ? options.push("Logout") : options.push("Login");
  
  //const [flag, setFlag] = useState(true);
  //const [client, setClient] = useState(true);

  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  let history = useHistory();

  const goTo = (page) => {
    setActiveLink(page);

    switch (page) {
      case options[0]:
        history.push("/about");
        break;
      case options[1]:
        history.push("/about");
        break;
      case options[2]:
        history.push("/contact");
        break;
      case options[3]:
        if (page !== 'Login') {
          Swal.fire({
            title: "Are you sure you want to leave?",
            showCancelButton: true,
            cancelButtonColor: "#CC0000",
            confirmButtonColor: "#4880D3",
            cancelButtonText: "No",
            confirmButtonText: "Yes",
          }).then(result => {
            if (result.value) {
              logout();
              history.push('/');
            }
          });
        }
        history.push(`/${page.toLowerCase()}`);
        break;
      default:
        break;
    }
  };

  const logout = async () => {
    try {
      UserService.setAccessToken(data.auth_token);
      await UserService.logout();
      setData({auth_token: '', user: {}});
    } catch (error) {
      console.log(error);
    }
  };

  /*
  const handleClick = () => {
    if (!flag) {
      setFlag(!flag);
      setClient(!client);
    }
  };

  const handleClient = () => {
    if (client) {
      setClient(!client);
      setFlag(!flag);
    }
  };
  */

  const DisplayDesktop = () => {
    const btnColor = {
      color: "white",
      backgroundColor: colors.blue,
    };

    const btnTransparent = {
      color: colors.blue,
      backgroundColor: "transparent",
    };

    return (
      <>
        <Link href="/">
          <img src={logo} alt="Build-T" className={classes.logo} />
        </Link>
        <Box className={classes.menuLinks}>
          {options.map((item) => (
            <Link
              underline="none"
              component="button"
              variant="body1"
              onClick={() => goTo(item)}
              color={activeLink === item ? "inherit" : "initial"}
              className={classes.item}
              key={item}
            >
              {item}
            </Link>
          ))}

          {data.auth_token && (
            <>
              <ButtonGroup size="large" style={{ float: "right" }}>
                <Button
                  disableElevation
                  className={classes.btn}
                  variant="contained"
                  //onClick={handleClick}
                  style={data.user.role === "vendor" ? btnColor : btnTransparent}
                >
                  Supplier
                </Button>
                <Button
                  disableElevation
                  className={classes.btn}
                  variant="contained"
                  //onClick={handleClient}
                  style={data.user.role !== "client" ? btnTransparent : btnColor}
                >
                  Client
                </Button>
              </ButtonGroup>
              <Box component="p" className={classes.hello}>
                Hello {data.user.name}
              </Box>
            </>
          )}
        </Box>
      </>
    );
  };

  const DisplayMobile = () => {
    return (
      <>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="Build-T" className={classes.logo} />
      </>
    );
  };

  return (
    <>
      <AppBar position="static" elevation={0}>
        <Toolbar>{isMobile ? <DisplayMobile /> : <DisplayDesktop />}</Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
