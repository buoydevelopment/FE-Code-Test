// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { get_recipe_list as getRecipeList,
         get_recipe as getRecipe } from '../actions';

import Home from '../views/pages/Home';
 
const mapStateToProps = state => {
  return {
    recipe_list: state.recipe_list || [],
    recipe: state.recipe || {}
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    get_recipe_list: () => {
      dispatch(getRecipeList())
    },
    get_recipe: (id) => {
      dispatch(getRecipe(id))
    },
  }
}
 
const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
 
export default HomeContainer
