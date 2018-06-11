# Results!

# Architecture

I used an MVVM architecture, since this is a code challenge I wanted to use the latest techonologies for the project. I based the App's architecture in a project that I already had in my repo (https://github.com/4gus71n/MVVMKotlin/) you can read more about the architecture there. 

But basically, this is just a MVVM architecture, using the SSOT (Single Source of Truth) pattern for the Repositories, this means that the UI is listening to the DB changes, through the ViewModel and the only thing that the Repository does is query the server-side endpoints and then update the DB.

I was going to use the Paging Library to perform some sort of pagination in the App, but (a) the endoints for the cocktail database doesn't support pagination and (b) we are actually using two totally different endpoints to fetch the search queries and the filtered search queries. This two things made very difficult to implement a pagination at the DB level. If you want to see a proper implementation of the Pagination Library, you can check the MVVMKotlin project in my repo. There's some other cool stuff that I implemented in that project regarding DB updates and reflecting those changes, automatically, in the UI.

# Preview

Smartphone:

![Alt Text](https://github.com/4gus71n/FE-Code-Test/blob/master/cocktails%20(1).gif)

Tablet:

![Alt Text](https://github.com/4gus71n/FE-Code-Test/blob/master/masterdetail.png)

# Things that I could improve

The only challenge that I had about the master/detail implementation was that in the cocktail detail screen I'm showing a parallax animation, this is pretty hard to replicate in the master/detail view, because each fragment has it's own toolbar and It's going to look pretty bad. The quick workaround for this was creating a different layout for the master/detail view from the cocktail detail screen, in which I removed the parallax effect.

I could have added some code to switch from a 2 span column grid into a 1 span column grid in the master/detail. 

The API sucks! Haha, I got stuck trying to figure out why the endpoints weren't working for the filter search. Problem is that the API ignores everything after the first GET parameter. For example the response for `filter.php?g=Cocktail_glass&a=Alcoholic` is exactly the same than `filter.php?g=Cocktail_glass&a=Non_Alcoholic` while the response for `filter.php?a=Alcoholic&g=Cocktail_glass` is totally different. It took a while until I figured out this. So I've might written some messy code for the Retrofit interface in the API calls.

The MaterialSearch library that I used to implement the search feature is really bad, the library's API is pretty bad and It doesn't have a clear field button for the search.

# Challenge

The most "complicated" algorithm is the one that I used to implement the search feature in the `CocktailListViewModel`. Basically we have a stream field called `cocktailList` this stream produces the cocktails list that we are going to show in the RecyclerView. But we need to switch between two different streams, the cocktails list from the filtered search and the cocktail lists from the query search. To do this, we do a switchMap based on the current query. We have another stream called `cocktailListSearchQuery` which pushes `SearchCriteria` objects. This object has two fields `query` that contains the string from the query search and `filterType` that contains the filter value. If the `query` field is empty that means that the search is being done with a `filterType`, hence we switch from streams to the filtered results. If the `query` field is not empty, that means that we want to search something using the other endpoint, and we switch to the proper stream. `switchMap` switches a stream based on other stream push. In this case we are listening for the `cocktailListSearchQuery` and then switching to the proper stream. Notice that I'm using the word "stream" to refer to LiveData/rx.Observables/Flowables. The values of `cocktailListSearchQuery` are pushed from the UI through Databinding using adapters in the RadioButtons.

Fill free to report any issue leaving your comments there about the code!

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
