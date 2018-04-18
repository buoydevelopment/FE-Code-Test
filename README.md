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

B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?

C) Have you used any strategy to optimize the performance of the list generated for the first feature?

D) Would you like to add any further comments or observations?

## Instructions for running:
```
run npm install
```
after all packages have been installed run
```
react-native run-android
```

## Answers:

A) Describe the strategy used to consume the API endpoints and the data management.
To API consume I used a Provider which is the module in charge of abstracting the application from the data collection. To communicate with the endpoints I used Axios which is a Javascript library that facilitates the HTTP requests along with the management of promises, automatically converting the answers to the JSON format.
For the data management I used Redux, which facilitated the data flow in the application and changes in the state of the application.

B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?  
For the route I used React-Native-Router-Flux which is one of the most complete liberies I could find. It contains a lot of documentation, it has many customizable aspects such as navs, tab bars and dynamic routing among others.
It is a library that I would use for an application with thousands of users, since it is stable, contains a very active community and is constantly updated.

C) Have you used any strategy to optimize the performance of the list generated for the first feature?
For the list I used the FlatList from the react-native library, which already has some optimizations, such as the fact that it only loads the items that are being viewed at the moment. In addition to the previous optimization another optimization like
getItemLayout which is an optional optimization that allows us to omit the measurement of the dynamic content if the height of the a priori elements is known. getItemLayout is the most efficient and is easy to use if you have fixed height elements. The latter was not implemented because, in this case, it was very simple what had to be implemented.

D) Would you like to add any further comments or observations?
I would like to clarify that I could only test the application on Android since I did not have a phone with iOS to perform the corresponding tests. The optional point I could not do it because of hourly complications, if you are interested in how I would implement it I could gladly explain it.
