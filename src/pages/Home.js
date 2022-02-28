import * as React from "react";
import {
  Grid,
  Typography,
  Box,
  Button,
  InputBase,
  Avatar,
  CardHeader,
  Card,
  CardContent,
} from "@material-ui/core";

import { colors, uiColors } from "../components/theme/colors";
import { makeStyles } from "@material-ui/core/styles";

import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import StarRateIcon from "@material-ui/icons/StarRate";

import bgImage from "../assets/images/background.png";
import home01 from "../assets/images/home-01.png";
import supplier from "../assets/images/supplier.png";
import client from "../assets/images/client.png";
import form from "../assets/images/form.png";
import reason1 from "../assets/images/reason-1.png";
import reason2 from "../assets/images/reason-2.png";
import reason3 from "../assets/images/reason-3.png";
import reason4 from "../assets/images/reason-4.png";
import home02 from "../assets/images/home-02.png";

const useStyles = makeStyles((theme) => ({
  main: {
    color: colors.grey,
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    //backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    //minHeight: "100vh",
    marginBottom: 80
  },
  gridTitle: {
    textAlign: "center",
    marginTop: 35,
  },
  grid: {
    textAlign: "center",
  },
  gridImage: {
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      marginBottom: 60,
    },
    "& img": {
      marginBottom: 20,
      [theme.breakpoints.between("xs", "sm", "md")]: {
        width: "90%",
      },
    },
  },
  subText: {
    color: colors.lightBlue,
  },
  h3: {
    fontSize: "xxx-large",
  },
  h4: {
    fontWeight: "bold",
  },
  form: {
    marginTop: 60,
    padding: 10,
    paddingLeft: 20,
    backgroundColor: "white",
    display: "inline-flex",
  },
  submit: {
    marginLeft: 40,
  },
  role: {
    alignItems: "center",
    margin: "20px 0",
  },
  imgRole: {
    width: "100%",
  },
  body1: {
    margin: "10px 0 40px 0",
  },
  mainPaddingLeft: {
    [theme.breakpoints.between("xs", "sm")]: {
      paddingLeft: 30,
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: 50,
    },
  },
  cols: {
    //alignItems: "center",
    marginTop: 50,
  },
  gridImgForm: {
    textAlign: "center",
    "& img": {
      width: "80%",
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  avtInactive: {
    backgroundColor: colors.lightBlue02,
  },
  avtActive: {
    backgroundColor: "white",
    color: colors.grey,
  },
  active: {
    backgroundColor: colors.lightBlue02,
  },
  boxImageChoose: {
    marginBottom: 40,
    "& img": {
      width: "40%",
      [theme.breakpoints.up("sm")]: {
        width: "30%",
      },
    },
  },
  imgChoose: {
    marginRight: 30,
    [theme.breakpoints.up("sm")]: {
      marginRight: 60,
    },
  },
  ctnReviews: {
    marginTop: 90,
    [theme.breakpoints.up("sm")]: {
      paddingBottom: 50,
    },
    backgroundColor: uiColors.app.background,
    "& h3": {
      marginTop: 60,
      textAlign: "center",
    },
    "& h6": {
      marginTop: 40,
      marginBottom: 30,
      paddingLeft: 50,
    },
    "& .MuiBox-root": {
      textAlign: "center",
      marginTop: 20,
    },
    "& .MuiCardHeader-title": {
      fontSize: 16,
      fontWeight: "bold",
    },
  },
  startRate: {
    color: colors.blue,
  },
  gridImage02: {
    textAlign: "center",
    marginTop: 50,
    "& img": {
      width: "100%",
    },
  },
  btnGetStarted: {
    marginTop: 40,
    width: '280px',
    fontWeight: 'bold',
    fontSize: 'x-large'
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Grid item xs={12} className={classes.gridTitle}>
        <Typography variant="h2">
          The best talent in technology{" "}
          <Box component="span" className={classes.subText}>
            her
          </Box>
          !
        </Typography>
      </Grid>
      <Grid item xs={12} className={classes.grid}>
        <Box className={classes.form} size="large">
          <InputBase
            className={classes.input}
            placeholder="Email"
            inputProps={{ "aria-label": "Email" }}
          />
          <Button
            disableElevation
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Get started!
          </Button>
        </Box>
      </Grid>

      <Grid item xs={12} className={classes.gridImage}>
        <img src={home01} alt="Build-T" />
      </Grid>

      <Grid item xs={12} className={classes.gridTitle}>
        <Typography variant="h3">
          What's the{" "}
          <Box component="span" className={classes.subText}>
            role{" "}
          </Box>
          you want to follow?
        </Typography>
      </Grid>

      <Grid container spacing={2} className={classes.role}>
        <Grid item xs={6}>
          <img src={supplier} alt="Build-T" className={classes.imgRole} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h4" className={classes.h4}>
            Supplier
          </Typography>
          <Box>
            <Typography variant="body1" className={classes.body1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Box>
              <Button disableElevation variant="contained" color="secondary"  href="/register">
                Register now -&gt;
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid container className={classes.role}>
        <Grid item xs={6} className={classes.mainPaddingLeft}>
          <Typography variant="h4" className={classes.h4}>
            Client
          </Typography>
          <Box>
            <Typography variant="body1" className={classes.body1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Box>
              <Button disableElevation variant="contained" color="secondary"  href="/register">
                Register now -&gt;
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={client} alt="Build-T" className={classes.imgRole} />
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.gridTitle}>
        <Typography variant="h3">
          How to{" "}
          <Box component="span" className={classes.subText}>
            use
          </Box>
          ?
        </Typography>
      </Grid>

      <Grid container className={classes.cols}>
        <Grid item xs={12} sm={6} className={classes.mainPaddingLeft}>
          <Typography variant="h4" align="center">
            We put you in touch
          </Typography>
          <Box>
            <CardHeader
              avatar={
                <Avatar className={`${classes.large} ${classes.avtInactive}`}>
                  1.
                </Avatar>
              }
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Box>
          <Box className={classes.active}>
            <CardHeader
              avatar={
                <Avatar className={`${classes.large} ${classes.avtActive}`}>
                  2.
                </Avatar>
              }
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Box>
          <Box>
            <CardHeader
              avatar={
                <Avatar className={`${classes.large} ${classes.avtInactive}`}>
                  3.
                </Avatar>
              }
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Box>
          <Box>
            <CardHeader
              avatar={
                <Avatar className={`${classes.large} ${classes.avtInactive}`}>
                  4.
                </Avatar>
              }
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.gridImgForm}>
          <img src={form} alt="Build-T" />
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.gridTitle}>
        <Typography variant="h3">
          Why to{"  "}
          <Box component="span" className={classes.subText}>
            choose{"  "}
          </Box>
          us?
        </Typography>
      </Grid>

      <Grid container className={classes.cols}>
        <Grid item xs={12} sm={6} className={classes.mainPaddingLeft}>
          <Box>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            <Typography variant="body1" className={classes.body1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.grid}>
          <Box className={classes.boxImageChoose}>
            <img src={reason1} alt="Build-T" className={classes.imgChoose} />
            <img src={reason2} alt="Build-T" />
          </Box>
          <Box className={classes.boxImageChoose}>
            <img src={reason3} alt="Build-T" className={classes.imgChoose} />
            <img src={reason4} alt="Build-T" />
          </Box>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.gridTitle}>
        <Typography variant="h3">
          Our{"  "}
          <Box component="span" className={classes.subText}>
            success{"  "}
          </Box>
          in numbers
        </Typography>
      </Grid>

      <Grid container className={`${classes.cols} ${classes.gridTitle}`}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h2">
            <ArrowUpwardOutlinedIcon style={{ fontSize: 40 }} /> 856
          </Typography>
          <Button
            disableElevation
            size="large"
            variant="contained"
            color="secondary"
          >
            Current Providers
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h2">
            <ArrowUpwardOutlinedIcon style={{ fontSize: 40 }} /> 682
          </Typography>
          <Button
            disableElevation
            size="large"
            variant="contained"
            color="secondary"
          >
            Connections made
          </Button>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h2">
            <ArrowUpwardOutlinedIcon style={{ fontSize: 40 }} /> 10687
          </Typography>
          <Button
            disableElevation
            size="large"
            variant="contained"
            color="secondary"
          >
            Projects created
          </Button>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        className={classes.ctnReviews}
      >
        <Grid item xs={12}>
          <Typography variant="h3">User reviews</Typography>
          <Typography variant="subtitle1">
            Join the 50,000+ clients that are using Vela today!
          </Typography>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Card>
            <Box>
              <StarRateIcon className={classes.startRate} />
              <StarRateIcon className={classes.startRate} />
              <StarRateIcon className={classes.startRate} />
              <StarRateIcon className={classes.startRate} />
              <StarRateIcon className={classes.startRate} />
            </Box>
            <CardHeader title="Customer or company name" />
            <CardContent>
              <Typography variant="body2" component="p" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Card>
            <Box>
              <StarRateIcon className={classes.startRate} />
              <StarRateIcon className={classes.startRate} />
              <StarRateIcon className={classes.startRate} />
              <StarRateIcon className={classes.startRate} />
              <StarRateIcon className={classes.startRate} />
            </Box>
            <CardHeader title="Customer or company name" />
            <CardContent>
              <Typography variant="body2" component="p" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse .
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <Box>
              <StarRateIcon className={classes.startRate} />
              <StarRateIcon className={classes.startRate} />
              <StarRateIcon className={classes.startRate} />
              <StarRateIcon className={classes.startRate} />
              <StarRateIcon className={classes.startRate} />
            </Box>
            <CardHeader title="Customer or company name" />
            <CardContent>
              <Typography variant="body2" component="p" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <Box>
              <StarRateIcon className={classes.startRate} />
              <StarRateIcon className={classes.startRate} />
              <StarRateIcon className={classes.startRate} />
              <StarRateIcon className={classes.startRate} />
              <StarRateIcon className={classes.startRate} />
            </Box>
            <CardHeader title="Customer or company name" />
            <CardContent>
              <Typography variant="body2" component="p" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse .
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid item xs={12} className={classes.gridImage02}>
        <img src={home02} alt="Build-T" />
      </Grid>

      <Grid item xs={12} className={classes.gridTitle}>
        <Typography variant="h5">Get Started Today</Typography>
      </Grid>

      <Grid item xs={12} className={classes.grid}>
        <Typography variant="h2" style={{ color: 'black'}}>
          Change the way you <br />
          work with clients forever. <br />
          You’ll thank us later.
        </Typography>
        <Button
            disableElevation
            size="large"
            variant="contained"
            color="secondary"
            className={classes.btnGetStarted}
          >
            Get started!
          </Button>
      </Grid>
    </div>
  );
};

export default Home;
