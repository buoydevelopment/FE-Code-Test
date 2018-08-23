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

I implemented redux to manage the state of the application. Components are listening to changes in the redux state.
When remote data is required I use fetch api to hit the endpoints and update the app state.
Lookup endpoint returns the same object structure as filter endpoint, but with additional information.
So when a new specific lookup is performed I just extend the original drink record I had obtained from the filter response.
This way I keep a clean and neat drink storage.
The orignal record properties as returned by the api are mapped inside reducers to a more convenient object.
Also redux-persist is working on the back to prevent unnecessary api calls if the data was already fetched
but it needs a little tweak since I'm never checking local data before hitting the api again. ;)

B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?

I've made use of react-router v4 to handle app routing.
I'm not sure I understand the question correctly but since app routing works on client side, the amount of people using it doesn't affect performance.

C) Have you used any strategy to optimize the performance of the list generated for the first feature?

No, I didn't but we're using a virtualization library in my current project to pervent the issues caused with long list with loading images.
react-virtualized is the library.

D) Would you like to add any further comments or observations?

To run the app just run:

> npm install
> npm start

And that should launch the app in localhost:3000

I included material-ui and bootstrap to apply styles since those two libraries are the ones I'm currently working with on a daily basis.
I've also found a component that easily allowed me to filter the list of drinks: react-text-filter

It was entertaining to make this demo work! Regards.
