import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cocktailActions from '../../redux/cocktail/actions';

const { getList } = cocktailActions;

class CocktailList extends Component {
 state = {
   search: ''
 }

 constructor(props) {
   super(props);
 }

 componentWillMount() {
   const { getList } = this.props;
   getList();
 }
 render() {
   return (
     <div>CocktailList Page</div>
   );
 }
}

CocktailList.propTypes = {
  cocktailList: PropTypes.array,
};

export default connect(
  state => ({
    cocktailList: state.Cocktail.cocktailList
  }),
  { getList }
)(CocktailList);