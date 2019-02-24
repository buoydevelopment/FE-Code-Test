class Cocktail {
	constructor( strDrink, strDrinkThumb, idDrink ) {
		this.strDrink = strDrink;
		this.strDrinkThumb = strDrinkThumb;
		this.idDrink = idDrink;
	}

	static fromJSON( properties ) {
		return new Cocktail(
			properties.strDrink,
			properties.strDrinkThumb,
			properties.idDrink,
		);
	}
}

export default Cocktail;
