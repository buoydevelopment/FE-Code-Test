import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// Header Styles to class
const styles = {
  // set color of navigation bar
  headerRoot: {
    backgroundColor: "#008394",
    position: "relative"
  },
  // position of back button
  backButton: {
    position: "absolute",
    top: 4,
    left: 4
  }
};

// location.state contains the index of selected drink
// it is used to scroll to that drink in list

const Header = ({ classes, location, history }) => (
  <AppBar classes={{ root: classes.headerRoot }} position="absolute">
    <Toolbar>
      {location.pathname !== "/" && (
        <IconButton
          className={classes.backButton}
          color="inherit"
          aria-label="ArrowBack"
          onClick={() => history.push("/", location.state)}
        >
          <ArrowBackIcon />
        </IconButton>
      )}
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Typography variant="title" color="inherit">
            Random Drinks 0.1
          </Typography>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  classes: PropTypes.shape({
    headerRoot: PropTypes.string.isRequired,
    backButton: PropTypes.string.isRequired
  }).isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withStyles(styles)(withRouter(Header));
