import { makeStyles } from "@material-ui/core/styles";

import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

export default function BaseLayout({ children }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar classes={classes} />
      {children}
      <Footer classes={classes} />
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));
