# Code Challenge

## Instructions:

`$ npm install`

## Overview:

Implement a simple mobile cocktails catalogue (master / detail). The catalogue consists of a table view list of cocktails with their name, toppings and photo. Once the user taps on a specific row it will push a new screen with that drink’s details: Name, Photo, Ingredients and Preparation.

## Questions:

A) Describe the strategy used to consume the API endpoints and the data management.

I use the native fetch function from react-native core, all the api calls are localted in the api folder, also i use flowjs to be consistent with my types.

The data is stored using the redux paradism, it is located in the store folder, all reducers state are
normalized


B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?

I use redux observable to be prevent any
web services failures, it ws fails, it keeps asking
for the data, still needs to do, how to stop asking and present to user a message to inform that the webservice is down

C) Have you used any strategy to optimize the performance of the list generated for the first feature?

I did use <FlatList> component with specifiying some
props that allows better performance, they are getItemLayout and initialNumToRender

Also I use the native library react-native-fast-image that highly improves scrolling smoothing when you have a list with
lot of images, also it adds caching

D) Would you like to add any further comments or observations?

I implete the filter mechanism, using rxjs, to allow debounce when the user is writing, this allows
dont filter the list just right away when a characters is entered

Also, i add some throting when user push a card, to prevent pushing same screen multiple times
