


# Code Challenge

## Answers:

**A) Describe the strategy used to consume the API endpoints and the data management.:**

In this case i call the drinks API, as this API is just necessary to call once per update, then i run all results, and with each results i request the details for each drink, as there are too many drinks i also save the drinks using AsyncTask, to avoid app crashes.

I every downloaded information i save it in the database, the app will auto-request the information while there is non information actually saved in the database, if you want to update it manually you just can pull to refresh from the drinks list, this way you can check drinks even while offline

When you request update information it will check if the drinks already exist in the local database, if exists it will update the drink information, in case an image update, ingredients, etc

**B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?:**

I don't understand exactly what you mean with routing, but yes, i always use the same libraries for both small or big project, i mean if is a small project it doesn't have to be an unoptimized application, i always try to work as better, optimized and fast as possible, maybe some of my techniques aren't the best ones, but i don't have all the knowledge available, i'm still learning and improving myself, i simply don't block myself if i don't know something, i just face it and learn about it.
The Libraries i use are this ones:
-Glide for Better Image Loading
-Retrofit 2 for APIs
-OrmLite as SQLite Database helper
-RecyclerView and CardView to show elements in the list

**C) Have you used any strategy to optimize the performance of the list generated for the first feature?**

Nothing fancy actually, in Lists i always use RecyclerView and CardView, even if there are just 4 Items, to show each image i use Glide to improve Image loading, it might delay a little bit while updating, i mean there are more than 30 elements which separate description for each, i did think in setting a Load more section to improve the download time, but it will take me a little more

**D) Would you like to add any further comments or observations?**

I'm actually not a Robot, as a human i make mistakes too, but i always takes those mistakes in count to self improvement, if there is no failure, there is no improve, it was just a test but i really enjoy it, really hope to know more about you and work with you

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
