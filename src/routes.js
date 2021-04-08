import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeComponent from "./components/HomeComponent";
import AboutComponent from "./components/AboutComponent";
import PageNotFoundComponent from "./components/PageNotFoundComponent";

export const routes = {
  root: "/",
  about: "/about",
};

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={routes.root} exact component={HomeComponent} />
        <Route path={routes.about} exact component={AboutComponent} />
        <Route component={PageNotFoundComponent} />
      </Switch>
    </Router>
  );
}
