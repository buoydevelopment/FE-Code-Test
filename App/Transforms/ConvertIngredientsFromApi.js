import AppConfiguration from "../Config/AppConfig";

export default cocktail => {
  const ingredientKeys = cocktail
    ? Object.keys(cocktail).filter(
        propertyName =>
          propertyName.indexOf(AppConfiguration.API_INGREDIENTS_STR) === 0
      )
    : null;

  if (!ingredientKeys || ingredientKeys.length <= 0) {
    return null;
  }

  return ingredientKeys.reduce((accumulator, currentValue, index) => {
    if (
      cocktail[currentValue] &&
      cocktail[currentValue] !== null &&
      cocktail[currentValue] !== ""
    ) {
      accumulator.push({
        name: cocktail[currentValue],
        measure: cocktail[AppConfiguration.API_MEASURE_STR + (index + 1)]
      });
    }
    return accumulator;
  }, []);
};
