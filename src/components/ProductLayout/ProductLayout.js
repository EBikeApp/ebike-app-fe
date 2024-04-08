import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '70px',
  },
}));

export default function ProductPageLayout({ children }) {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        {children}
    </div>
  );
}
