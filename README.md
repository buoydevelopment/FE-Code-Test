# Code Challenge

## Instructions:

I used create-react-app, so to install just clone and run

```js
yarn
yarn start
```

to run tests

```js
yarn test
yarn test --coverage
```

## Features:

Since I was free to adapt the style... I change the layout a little, the prints bellow show the changes I did.

**1. Cocktails list:**
[Implemented]
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
![Wireframe1](https://user-images.githubusercontent.com/11433064/44490661-4cfe1e80-a635-11e8-8e2b-a59da1e10352.png)
![screen shot 2018-02-02 at 12 53 57](https://user-images.githubusercontent.com/263229/35742087-40b1ce26-0818-11e8-91d7-5c2ea0d4a6aa.png)

**2. Cocktail detail:**
[Implemented]
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
![Wireframe2](https://user-images.githubusercontent.com/11433064/44490646-3f489900-a635-11e8-9e0f-6ebaae737da6.png)
![screen shot 2018-02-02 at 12 53 37](https://user-images.githubusercontent.com/263229/35742155-63205b1c-0818-11e8-8b4b-608a46eaa718.png)

**3. Bonus Points: (Optional)**
[Not Implemented]
Implement a filter by name functionality on the first screen that automatically filters the results while typing, only showing the rows that satisfy the criteria entered by the user.

## Questions:

A) Describe the strategy used to consume the API endpoints and the data management.
I created a provider with the new context API, and add a HOC (withDrinks) to consume data and functions from that provider, all the logic and data of the API are there. Bellow an example of how the things works.
 * load home ('/')
 * query all data -> put all drinks in provider state as an immutable array (for performance)
* click in some drink
* query specific drink data by id -> search by index in an immutable list and put that data in the founded item
* go back -> scroll to clicked drink
* click again in the same drink -> since we already have the data and this data doesn't change that frequently, we don't need to query again, just display the data

also works if the User start's from a clicked item. (URL = /drinks/:ID)

B) Explain which library was used for the routing and why. Would you use the same for a consumer-facing app targeting thousands of users? Why?
I use react-router since is the most famous one for React (web), it has all we need for development (a lot of docs and answered questions on StackOverflow). I totally recommend to use it for any kind of react application(web).

C) Have you used any strategy to optimize the performance of the list generated for the first feature?
Since the beginning of this challenge I see that you want the optimized version, so I used react virtualized as React Docs recommended. To be honest I never used that library but the documentation is really good and the performance is insane, the only problem is that is not too easy to style, and I spend a good time making things work fine. Maybe need future work here, since the size of a row is not dynamic.

D) Would you like to add any further comments or observations?
Since today is my birthday I can't invest the necessary time to write all the tests, so for further works:
 * add tests everywhere
 * do the step 3.
 * handle when the query fails.
