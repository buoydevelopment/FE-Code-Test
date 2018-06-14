# Code Challenge

Implementation in React of [these instructions](#Instructions) to develop a simple mobile cocktails catalogue.

Due to time and complexity restrictions, this project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Prerequisites

You will need the following things properly installed on your computer.

* [Node.js](https://nodejs.org/) (version >= 6)
* [Yarn](https://yarnpkg.com/en/)

Run `yarn` in the project directory to install its dependencies.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Instructions:

Please clone the repository, complete the exercise, and submit a PR for us to review! If you have any questions, you can reach out directly here or leave comments on your pull request which we will respond to. Remember, all instructions for running the application (including installing relevant libraries, etc.) should be included in the README. Thank you and looking forward to seeing your great work!

### Overview:

Implement a simple mobile cocktails catalogue (master / detail). The catalogue consists of a table view list of cocktails with their name, toppings and photo. Once the user taps on a specific row it will push a new screen with that drink’s details: Name, Photo, Ingredients and Preparation.

### Features:

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

### Questions:

A) Describe the strategy used to consume the API endpoints and the data management.

B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?

C) Have you used any strategy to optimize the performance of the list generated for the first feature?

D) Would you like to add any further comments or observations?


## Answers

A- Due to the size of this project, using Redux with a middleware like `Redux Thunk` or `Redux Saga` for API communications/side effects does not worth it. It would add more complexity than the required.
Instead, I used the `Fetch API` and handle the response in the `componentDidMount` React's lifecycle hook method.
Also, I categorized the React components into `containers` and `components` properly. I use the former for data manipulation, and the latter for web rendering, handle visual behavior and user interaction.

B- For routing I used [React Router](https://github.com/ReactTraining/react-router) because it was the library that I have been using in other projects, the one that `Create React App` recommends, and as far as I know, the most popular one.
If this SPA was intended to be used by thousands of users, I think the best approach would be bundle it into lazy load chunks and render them in the server side. These features are supported by React Router. I have to say that I have never done this in the past.

C- To improve the app performance, I store the API response in the session to avoid having to call the API several times, as the data (I suspect) is static.

D- I took the liberty of changing a little bit the styles and I apologies in advance about them. My experience with CSS is not the best.
I did not implement any test either.
