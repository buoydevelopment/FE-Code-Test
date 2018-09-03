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


# DEMO

Click [here](https://react-drinks.herokuapp.com/) to see a demo.

## Install & Run

Clone this repo and execute the following commands:

```
yarn install
npm start
```

## Unit Tests

```
yarn test
```

## Questions:

A) Describe the strategy used to consume the API endpoints and the data management.

The application is structured by layers. The layer that communicates with the back-end is represented by the API folder, which is an implementation of the Fetch API. (Here you could use axios or superagent, depending on what you want to achieve, for this exercise it seemed good to use fetch). I included a configuration file (api/config.json) which defines the URLs for different environments. At this moment, you have only defined values for "dev" environment.

I implemented redux for the application data management. As an improvement point, we can provide a better design, separating the actions in different files favoring scalability. In addition, local storage could be used to cache the data and thus avoid redundant calls to the API. I used the middleware "thunk" to allow the asynchronous dispatch and handle the interaction with the API more efficiently.

B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?

I used react-router 4 for routing. Using React-router, you can dynamically load the routes as the application is rendering. This feature allows greater performance if the number of users grows, since the instantiation of the components to each route is not performed at the time of initializing the app.

C) Have you used any strategy to optimize the performance of the list generated for the first feature?

I didn't use any particular approach. I tried to make the components as "light" as possible for fast rendering. In addition, each component has the lowest possible amount of data processing, using in some cases pure components. As an opportunity to improve, I could implement lazy loading on the images and paginate the results.

D) Would you like to add any further comments or observations?

There are some pending tasks, I could implement them with a little more time:

TODO list:

- Unit test: using Jest and Sinon.
- There is a small bug: the input value is not stored when browsing in drink detail page.
- Use local storage.
- Improve the UX / UI: I focused on the functionality and there are some user experience problems and styles to improve.
- Use PropTypes.