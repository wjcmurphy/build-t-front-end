export const register = theme => ({
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(3),
    display: "block",
    width: "100%",
  },

  gridTitle: theme.gridTitle,
  subText: theme.subText,
  
  button: {
    marginTop: 40,
    width: "50%"
  },

  error: {
    '& .MuiAlert-message': {
      display: 'flex',
      flexDirection: 'column'
    }
  }
});
