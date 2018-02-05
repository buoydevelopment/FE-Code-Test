# Code Challenge

## In order to run the project:
1.
```
cd CodeTest
```

2.
```
npm install
```

3.
```
react-native start
```

4.
```
react-native run-android
```
(in another terminal tab)

## Questions: 

A) Describe the strategy used to consume the API endpoints and the data management.

In the componentWillMount hook of each view I consume the API using the javascript's native 'fetch' function, then save the data in the component's state and show it in the render. Using Redux seemed like 'too much' for this project.

B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?

I used 'react-navigation', because RN's docs suggest that library for simple navigation. I think the library could be used for a bigger project because it provides a simple integration with redux.

https://facebook.github.io/react-native/docs/navigation.html

C) Have you used any strategy to optimize the performance of the list generated for the first feature?

Yes, I used React Native's FlatList, which only renders elements that are currently showing on the screen.
https://facebook.github.io/react-native/docs/flatlist.html

D) Would you like to add any further comments or observations?

Yes! I would definitely make the search bar prettier, visually and function-wise.
