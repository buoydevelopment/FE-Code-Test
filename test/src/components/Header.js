import React from 'react';
import {IoIosSearch} from "react-icons/io";
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import Context from "../Context";

class Header extends React.Component {

  static contextType = Context;

  render() {
    return (<header className={styles.header}>
      <div className={styles.left}>
      </div>
      <div className={styles.title}>
        <span>{this.context.title}</span>
      </div>
      <div className={styles.right}>
        <IoIosSearch/>
      </div>
    </header>)
  }


}


Header.propTypes = {};

export default Header;
