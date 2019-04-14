## Getting started

```
$ npm install

```

## launch iOS

`$ react-native run-ios`

## launch Android

`$ react-native run-android`


# Code Challenge

## Please answer the following questions once you finish codding:

A) Describe the strategy used to consume the API endpoints and the data management.
 	I used `fetch` from the native JavaScript API to consume the API endpoints and Redux with redux-thunk	middleware for the state management and side effects.

B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?
	I used `react-native-navigation` for the routing because of its performance since the use of the native modules grant a better perfomance. I'd certainly use this library in that kind of cases.
C) Have you used any strategy to optimize the performance of the list generated for the first feature?
	Yes, I have used native `FlatList` component with some props setting to improve performance and used `react-native-fast-image` library that handles image caching like browsers. 
D) Would you like to add any further comments or observations?
	I used `reselect` library to filter the results using `createSelector` function in order to make the most of its memoized selectors.