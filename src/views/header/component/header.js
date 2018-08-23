import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import RoutingPaths from 'navigation/routing-paths';

const Header = () =>
  <header className="header">
    <Link to={RoutingPaths.root}>
      <Icon>
        chevron_left
      </Icon>
    </Link>
  </header>;


export default Header;

