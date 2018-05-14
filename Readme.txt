
Questions:

A) Describe the strategy used to consume the API endpoints and the data management.

The particular situation in this exercise was that I needed to use the service http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=16108 on the first screen because I needed data from this service. That is an unusual situation. So I called the service every time I needed it and saved the data so i would not call the service again. I thought that another solution to improve efficiency would have been to do image cache but I didn't implement it.

B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?

I don't understand this question.

C) Have you used any strategy to optimize the performance of the list generated for the first feature?

I used recyclerView.

D) Would you like to add any further comments or observations?

No, I don't.