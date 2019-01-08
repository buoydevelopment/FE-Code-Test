import AppConfiguration from '../Config/AppConfig'

export default (cocktail) => {

  let ingredientKeys = cocktail ? Object.keys(cocktail).filter(function (propertyName) {
      return propertyName.indexOf(AppConfiguration.API_INGREDIENTS_STR) === 0;
    }) :null;

  if(!ingredientKeys || ingredientKeys.length <= 0){
    return null
  }

  let ingredientList = [];

  ingredientKeys.map((currentValue, index)=>{
      if(cocktail[currentValue] && cocktail[currentValue] !== null && cocktail[currentValue] !== ''){
        ingredientList.push({name:cocktail[currentValue], measure:cocktail[AppConfiguration.API_MEASURE_STR+(index+1)]});
      }
  });

  return ingredientList;

}
