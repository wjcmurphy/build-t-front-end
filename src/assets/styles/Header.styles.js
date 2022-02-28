
import { colors } from "../../components/theme/colors";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      margin: 0,
    },
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    fontSize: 14,
    backgroundColor: "transparent",
    cursor: "default",
    color: colors.blue,
    "&:hover": {
      color: colors.blue,
    },
  },
  logo: {
    maxWidth: 400,
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
  },
  menuLinks: {
    width: "100%",
    marginLeft: 50,
  },
  item: {
    padding: theme.spacing(1),
    width: '20%'
  },
  hello: {
    display:"flex", 
    justifyContent: "flex-end", 
    marginRight: 30
  },

  offset: theme.mixins.toolbar,
}));

export default useStyles;
