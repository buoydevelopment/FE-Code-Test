## Instructions for Running 
- Run it in Android Studio using Java 8.
- In case it doesn't work, check this link: https://developer.android.com/studio/write/java8-support

## Questionary 

##### A) Describe the strategy used to consume the API endpoints and the data management.

Regarding the API, my strategy was to hit "/filter.php?g=Cocktail_glass" endpoint first (to get the cocktails list), and then, for each cocktail item, perform an individual request to get their ingredients (through the filter by id endpoint, "/lookup.php").
As for the data management, I created an entity class named Cocktail, which stores all the relevant information about the cocktail, that can be later used in the details screen. I decided not to use any database mechanism, other than just storing an array of Cocktails as a variable in the class that handles the cocktails list, and then injecting the selected cocktail, through an intent, to the second screen.
In regards to the performance, I used a strategy that’s described in item C.

##### B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?
 I used Retrofit to deal with the REST services. This library fits very well into most of projects that need to consume this kind of endpoints. I personally like the library because it gives you a clean API that, under standard scenarios, makes you forget about the networking implementation inner workings and parsing details, allowing you to focus on what’s more important to the app: the business logic. Retrofit helps a lot with data parsing and error handling, and it does it in a very straightforward and convenient way. It also allows customization, through classes like “interceptors”. This is actually something I needed to use in this project because this API in particular wasn’t the best fit for the requested consumer app. Something else that I’d like to mention is that, introducing new developers to the usage of this library is a smooth process, as it’s easy to understand and use. What’s more, Retrofit is a third party library that has become a very well-known standard in Android development, which gives me the confidence that I’m using something that’s acknowledged by the community.
If we are talking about thousand of users I’d propose a change in the API. First, I would make the lookup endpoint work with pagination, to avoid having heavy responses. Also, as a performance enhancement, I would include the ingredients and measures in these lookup requests, to avoid having to perform an individual request per each item in the first screen.

##### C) Have you used any strategy to optimize the performance of the list generated for the first feature?

 Yes, I chose to perform the "filter by id” request only for those items that are visible to the user. This way, we can avoid sending unnecessary requests. As the user scrolls down through the list and items become visible, their corresponding “filter by id” requests are performed.

##### D) Would you like to add any further comments or observations?

Yes. I would suggest a negotiation to make the API more consumer-friendly, in order to avoid having to write lots of code in every client that consumes it. Of course, it will depend on how useful the current API is for other consumers, and how difficult it can be to rework it sever-side.

