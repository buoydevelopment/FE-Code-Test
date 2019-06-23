# Code Challenge

To run the project
```
cd test
yarn
npm start
```


A) Describe the strategy used to consume the API endpoints and the data management.
For the API endpoints i used axios library, and for the data management i used react context api and react internal component state, i didn't used redux because the example is small and i consider that the react context api solves all state management requirements on this case.

B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?
for routing i used react router library, yes because the routing is on the client side (single page web app) and doesnt matter for the front end the amount of users.

C) Have you used any strategy to optimize the performance of the list generated for the first feature?
i think that the browser dom as difference of react native (mobile) supports alot of results without optimization but in the case that we need optimization on the list, i suggest to use virtualized list strategy.

D) Would you like to add any further comments or observations?
because lack of time i decided not complete the bonus points but if are necessary i can do it without any problem.


