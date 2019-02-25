class Cocktail {
  constructor(
    strDrink,
    strDrinkThumb,
    idDrink,
    instructions,
    ingredient1,
    ingredient2,
    ingredient3,
    ingredient4,
    ingredient5,
    ingredient6,
    ingredient7,
    ingredient8,
    ingredient9,
    ingredient10,
    ingredient11,
    ingredient12,
    ingredient13,
    ingredient14,
    ingredient15
  ) {
    this.strDrink = strDrink;
    this.strDrinkThumb = strDrinkThumb;
    this.idDrink = idDrink;
    this.instructions = instructions;
    this.ingredient1 = ingredient1;
    this.ingredient2 = ingredient2;
    this.ingredient3 = ingredient3;
    this.ingredient4 = ingredient4;
    this.ingredient5 = ingredient5;
    this.ingredient6 = ingredient6;
    this.ingredient7 = ingredient7;
    this.ingredient8 = ingredient8;
    this.ingredient9 = ingredient9;
    this.ingredient10 = ingredient10;
    this.ingredient11 = ingredient11;
    this.ingredient12 = ingredient12;
    this.ingredient13 = ingredient13;
    this.ingredient14 = ingredient14;
    this.ingredient15 = ingredient15;
  }

  static fromJSON(properties) {
    return new Cocktail(
      properties.strDrink,
      properties.strDrinkThumb,
      properties.idDrink,
      properties.strInstructions,
      properties.strIngredient1,
      properties.strIngredient2,
      properties.strIngredient3,
      properties.strIngredient4,
      properties.strIngredient5,
      properties.strIngredient6,
      properties.strIngredient7,
      properties.strIngredient8,
      properties.strIngredient9,
      properties.strIngredient10,
      properties.strIngredient11,
      properties.strIngredient12,
      properties.strIngredient13,
      properties.strIngredient14,
      properties.strIngredient15
    );
  }
}

export default Cocktail;
