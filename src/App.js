import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "components/Header";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";

// styles
const styles = {
  pageContainer: {
    background: "#33c9dc",
    height: "calc(100vh - 56px)",
    overflowY: "scroll",
    width: "100vw"
  }
};

const Routes = ({ classes }) => (
  <Router>
    <React.Fragment>
      <Header />
      <div className={classes.pageContainer}>
        <Switch>
          <Route exact path="/" component={PageOne} />
          <Route exact path="/drinks/:drinkId" component={PageTwo} />
          <Redirect to="/" />
        </Switch>
      </div>
    </React.Fragment>
  </Router>
);

export default withStyles(styles)(Routes);
