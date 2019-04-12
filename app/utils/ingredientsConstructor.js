export default function ingredientsConstructor(cocktail) {
  const ingredientKeys = cocktail
    ? Object.keys(cocktail).filter(property => property.indexOf('strIngredient') === 0)
    : null;

  if (!ingredientKeys || ingredientKeys.length <= 0) {
    return null;
  }

  return ingredientKeys.reduce((ingredientsArr, currentIngredient, index) => {
    if (
      cocktail[currentIngredient] &&
      cocktail[currentIngredient] !== null &&
      cocktail[currentIngredient] !== ''
    ) {
      ingredientsArr.push({
        ingredientName: cocktail[currentIngredient],
        ingredientMeasure: cocktail[`strMeasure${index + 1}`],
      });
    }
    return ingredientsArr;
  }, []);
}
