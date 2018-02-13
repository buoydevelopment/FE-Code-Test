# react-native-test-2

To start the applicationm you should do the following steps:

  ##### Android:
  - run `npm i` in the root directory
  - run `react-native run-android` in the root directory
    
  ##### IOS:
  - run `npm i` in the root directory
  - open XCode and run the app
  
  ## Answers to the questions:
   1) The strategy was quite simple. When user opens the app, the app makes a get request to the api to get a list of the drinks.
      When user clicks on any of the drinks the app makes a request to get a data about a particular drink. 
   2) I was using `react-navigation`, as I've used it many times in my projects and It's really a simple, but at the same time very powerful tool.
   3) Yes, I used `FlatList` instead of `ScrollList`, as `ScrollList` renders all the elements at once, when `FlatList` renders the items 
      by small parts. It makes a performance quite better.
   4) I'd like to say, that structure of the API isn't very comfortable. I had to make additional actions to get a list of ingridients. It's not very good.
 
 ## Addition information:
  To show/hide search bar, you should click on the search icon.
