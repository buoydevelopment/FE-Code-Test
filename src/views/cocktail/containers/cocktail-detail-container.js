import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import connect from 'react-redux/es/connect/connect';
import { getCocktail } from 'redux/state/cocktails/actions';
import CocktailDetail from 'views/cocktail/components/cocktail-detail';
import Header from 'views/header/component/header';

class CocktailDetailContainer extends React.Component {
  componentDidMount() {
    this.props.getCocktail(this.props.cocktailId);
  }

  render() {
    return (
      <div>
        <Header/>
        <CocktailDetail cocktail={this.props.cocktail}/>
      </div>
    );
  }
}

CocktailDetailContainer.propTypes = {
  cocktailId: PropTypes.string.isRequired,
  cocktail: PropTypes.object.isRequired,
  getCocktail: PropTypes.func.isRequired
};

const mapStateToProps = function(state, props) {
  return {
    cocktail: state.cocktails.data.drinks.find(c =>
      c.id === props.match.params.id) || { ingredients: [] },
    cocktailId: props.match.params.id
  };
};

const mapDispatchToProps = function(dispatch) {
  return bindActionCreators({
    getCocktail
  }, dispatch);
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(CocktailDetailContainer);
