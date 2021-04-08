import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import { routes } from "../routes";

export default function Navbar(props) {
  const { classes } = props;
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href={routes.root} underline="none" color="inherit">
              Sourcespace
            </Link>
          </Typography>
          <Button color="inherit" href={routes.about}>
            About
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
