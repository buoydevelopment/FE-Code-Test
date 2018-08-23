# Code Challenge

## Instructions:

Please clone the repository, complete the exercise, and submit a PR for us to review! If you have any questions, you can reach out directly here or leave comments on your pull request which we will respond to. Remember, all instructions for running the application (including installing relevant libraries, etc.) should be included in the README. Thank you and looking forward to seeing your great work!

## Overview:

Implement a simple mobile cocktails catalogue (master / detail). The catalogue consists of a table view list of cocktails with their name, toppings and photo. Once the user taps on a specific row it will push a new screen with that drink’s details: Name, Photo, Ingredients and Preparation.

## Features:

**1. Cocktails list:**

For each row of the list it will display the Cocktail name and photo (See wireframe 1).
The API endpoint that should be consumed for this purpose is:

http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass

This returns a JSON list of cocktails, and the information needed in order to populate each row of the list.

```
{
 	strDrink,           → Cocktail name
     	strDrinkThumb,  → Photo URL
      	idDrink       → Cocktail ID
}
```

Wireframe 1:

![screen shot 2018-02-02 at 12 53 57](https://user-images.githubusercontent.com/263229/35742087-40b1ce26-0818-11e8-91d7-5c2ea0d4a6aa.png)




**2. Cocktail detail:**

Once the user taps on a row from the list mentioned in the previous feature it will push a new screen with the selected cocktail’s details, where it will show it’s name, photo, ingredients and instructions (See wireframe 2)

The endpoint to be used for this is the following:

http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink} → Cocktail ID
I.g.: http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=16108

The endpoint returns a JSON with the cocktails info, the needed properties are:
```
{
	strInstructions,  → instructions
	strDrink,         → cocktail name
	strDrinkThumb,    → photo URL
	strIngredient1,   → ingredient 1
	...
	strIngredientN    → ingredient N
}
```

Wireframe 2

![screen shot 2018-02-02 at 12 53 37](https://user-images.githubusercontent.com/263229/35742155-63205b1c-0818-11e8-8b4b-608a46eaa718.png)


**3. Bonus Points: (Optional)**

Implement a filter by name functionality on the first screen that automatically filters the results while typing, only showing the rows that satisfy the criteria entered by the user.

## Questions:

A) Describe the strategy used to consume the API endpoints and the data management.
Used `react-redux` to consume the API endpoints, all actions are in `actions/index.js`and reducers are in `reducers/index.js`

B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?
Used `react-router-dom` for routing, is the most used and the most stable in marketplace

C) Have you used any strategy to optimize the performance of the list generated for the first feature?
Not in particular, but I would really like to use something like `react-infinite-scroller`


D) Would you like to add any further comments or observations?

Those API responses are bad constructed, I want to think that it was on purpose

This endpoint:
https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=16108

is used to iterate in front-end every single row must bring all data we are going to show on each card

it brings only:
```
{
  strDrink, → Cocktail name
  strDrinkThumb, → Photo URL
  idDrink → Cocktail ID
}
```

When must bring something like this:
```
{
  strDrink, → Cocktail name
  strDrinkThumb, → Photo URL
  idDrink → Cocktail ID
  arrIngredients → {
      0 → Bitters
      1 → Water
      3 → 4 more ingredients
  }
}
```

The show endpoint:
https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=16108

seems to be worst, it brings an array of drinks with only one row, when must return just one row, besides, ingredients and measures are awfully constructed, must have at least an array of Ingredients and another array of measures, instead of having:
```
  ...
  strIngredient10": "",
  "strIngredient11": "",
  "strIngredient12": "",
  "strIngredient13": "",
  "strIngredient14": "",
  "strIngredient15": "",
  "strMeasure1": "2 oz ",
  "strMeasure2": "1/2 oz ",
  "strMeasure3": "1 splash ",
  "strMeasure4": "1 oz ",
  "strMeasure5": " ",
  "strMeasure6": " ",
  "strMeasure7": " ",
  "strMeasure8": " ",
  "strMeasure9": " ",
  ...
```

Nevertheless, I did what I could in this short period
