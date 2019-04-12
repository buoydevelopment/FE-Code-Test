import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './SearchBarStyles';

const SearchBar = ({ searchText, onChangeText }) => {
  return (
    <TextInput
      style={styles.searchInput}
      value={searchText}
      placeholder="Type a cocktail name..."
      onChangeText={onChangeText}
    />
  );
};

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default SearchBar;
