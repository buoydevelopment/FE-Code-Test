import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import { getCocktails } from 'redux/state/cocktails/actions';
import CocktailList from 'views/cocktail/components/cocktail-list';
import Filter from 'views/filter/component/filter';

class CocktailListContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      filter: ''
    };
  }

  componentDidMount() {
    this.props.getCocktails();
  }

  onFilter = (filter) => {
    this.setState({ filter });
  };

  drinkFilter = filter =>
    cocktail => cocktail.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;

  render() {
    const filteredDrinks = this.state.filter ?
      this.props.cocktails.filter(this.drinkFilter(this.state.filter)) :
      this.props.cocktails;

    return (
      <div>
        <Filter onFilter={filter => this.onFilter(filter.target.value)}/>
        <CocktailList cocktails={filteredDrinks}/>
      </div>
    );
  }
}

CocktailListContainer.propTypes = {
  cocktails: PropTypes.array.isRequired,
  getCocktails: PropTypes.func.isRequired
};

const mapStateToProps = function(state) {
  return {
    cocktails: state.cocktails.data.drinks || []
  };
};

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators({
    getCocktails
  }, dispatch);
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CocktailListContainer);
