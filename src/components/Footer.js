import React from "react";
import {
  Container,
  Typography,
  Link,
  Grid,
  Box,
  Button,
  useMediaQuery,
} from "@material-ui/core";

import { Instagram, Facebook, LinkedIn } from "@material-ui/icons";

import { useTheme } from "@material-ui/core/styles";
import useStyles from "../assets/styles/Footer.styles";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = useStyles();

  return (
    <footer>
      <Box className={classes.footer}>
        <Container maxWidth="lg" className={classes.ctn}>
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={4}
              style={!isMobile ? { marginRight: "80px" } : {}}
            >
              <Box textAlign="center" marginBottom="40px">
                <Typography variant="h6">Ready to get started?</Typography>
              </Box>
              <Box textAlign="center">
                <Button
                  href="/register"
                  color="secondary"
                  variant="contained"
                  size="large"
                  className={classes.btn}
                >
                  Register now
                </Button>
              </Box>
            </Grid>

            <Grid item xs className={classes.gridItem}>
              <Box className={classes.boxLinks}>
                <Link
                  href="/about"
                  color="inherit"
                  variant="body2"
                  className={classes.link}
                >
                  About Us
                </Link>
              </Box>
              <Box className={classes.boxLinks}>
                <Link
                  href="#"
                  color="inherit"
                  variant="body2"
                  className={classes.link}
                >
                  Our Policies
                </Link>
              </Box>
              <Box className={classes.boxLinks}>
                <Link
                  href="#"
                  color="inherit"
                  variant="body2"
                  className={classes.link}
                >
                  Terms of privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs className={classes.gridItem}>
              <Box className={classes.boxLinks}>
                <Link
                  href="#"
                  color="inherit"
                  variant="body2"
                  className={classes.link}
                >
                  How to use
                </Link>
              </Box>
              <Box className={classes.boxLinks}>
                <Link
                  href="#"
                  color="inherit"
                  variant="body2"
                  className={classes.link}
                >
                  Glossary
                </Link>
              </Box>
              <Box className={classes.boxLinks}>
                <Link
                  href="#"
                  color="inherit"
                  variant="body2"
                  className={classes.link}
                >
                  Work with us
                </Link>
              </Box>
            </Grid>
            <Grid item xs className={classes.gridItem}>
              <Box className={classes.boxLinks}>
                <Link
                  href="#"
                  color="inherit"
                  variant="body2"
                  className={classes.link}
                >
                  Help
                </Link>
              </Box>
              <Box className={classes.boxLinks}>
                <Link
                  href="#"
                  color="inherit"
                  variant="body2"
                  className={classes.link}
                >
                  FAQ's
                </Link>
              </Box>
              <Box className={classes.boxLinks}>
                <Link
                  href="#"
                  color="inherit"
                  variant="body2"
                  className={classes.link}
                >
                  Blog
                </Link>
              </Box>
              <Box className={classes.boxLinks}>
                <Link
                  href="/contact"
                  color="inherit"
                  variant="body2"
                  className={classes.link}
                >
                  Contact us
                </Link>
              </Box>
              <Box className={classes.boxLinks} textAlign="center">
                <Link href="#" className={classes.socialIcons}>
                  <Facebook />
                </Link>
                <Link href="#" className={classes.socialIcons}>
                  <Instagram />
                </Link>
                <Link href="#" className={classes.socialIcons}>
                  <LinkedIn />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
