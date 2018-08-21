// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { get_recipe as getRecipe } from '../actions';

import Recipe from '../views/pages/Recipe';
 
const mapStateToProps = state => {
  return {
    recipe: state.recipe || {}
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    get_recipe: (id) => {
      dispatch(getRecipe(id))
    },
  }
}
 
const RecipeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe)
 
export default RecipeContainer
