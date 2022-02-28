import React from "react";
import "fontsource-roboto";

import CssBaseline from "@material-ui/core/CssBaseline";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";
import { MainTheme } from "./components/theme/buildt";

import { Route, Switch } from "react-router-dom";

import { DataProvider } from "./context/DataContext";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";

function App() {
  let theme = createMuiTheme(MainTheme);
  theme = responsiveFontSizes(theme);
  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Switch>
          <Route
            exact
            from="/register"
            render={(props) => <Register {...props} />}
          />
          <Route exact from="/login" render={(props) => <Login {...props} />} />
          <Route exact from="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/contact"
            render={(props) => <Contact {...props} />}
          />
          <Route exact path="/about" render={(props) => <About {...props} />} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
