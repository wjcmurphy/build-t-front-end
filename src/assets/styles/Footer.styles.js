import { makeStyles } from "@material-ui/core/styles";

import { colors } from "../../components/theme/colors";

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "auto",
    width: "100%",
    position: "static",
    bottom: 0,
    backgroundColor: colors.grey,
    color: "white",
  },
  ctn: {
    padding: "40px",
  },
  btn: {
    width: "80%",
    color: "white",
  },
  gridItem: {
    marginTop: "20px",
  },
  boxLinks: {
    marginTop: "20px",
  },
  link: {
    "&:hover": {
      color: colors.yellow,
      textDecoration: "none",
    },
  },
  socialIcons: {
    color: colors.yellow,
    marginRight: "8px",
  },
}));


export default useStyles;
