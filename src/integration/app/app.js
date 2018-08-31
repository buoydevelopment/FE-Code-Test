import React from 'react';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import Home from 'views/home/component/home';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4ebcd1',
      main: '#2c437c',
      dark: '#001d4f',
      contrastText: '#fff'
    }
  }
});

const styles = {
  main: {
    backgroundColor: '#4ebcd1',
    height: '100%'
  }
};

class App extends React.PureComponent {
  render() {
    return <MuiThemeProvider theme={theme}>
      <div>
        <main className={this.props.classes.main}>
          <Home/>
        </main>
      </div>
    </MuiThemeProvider>;
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles, { withTheme: true }),
  withRouter
)(App);
