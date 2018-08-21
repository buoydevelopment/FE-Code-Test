import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListView from './ListView';
import cocktailActions from '../../redux/cocktail/actions';

const { getList } = cocktailActions;

class CocktailList extends Component {
  state = {
    search: ''
  }

  componentWillMount() {
    const { getList } = this.props;
    getList();
  }
  render() {
    const { cocktailList } = this.props; 
    console.log(cocktailList);
    return (
      <section>
        {
          <ListView list={cocktailList} />
        }
      </section>
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