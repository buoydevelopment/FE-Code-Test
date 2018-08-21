#### Run the app
0. ```npm install```
0. ```npm run dev```

#### build the app
0. ```npm run build```

served at localhost: 2999

## A) Strategy used to consume the API endpoints and the data management
- Used redux-thunk for async API call
- Save fetched data into redux store
- Define 3 actions which reflect for `start`, `success`, `error` status for every API call
  Those 3 actions are used to check if API call is finished, to display progress bar and snack bar

## B) Library used for the routing
- React-Router
- Drawer of Material UI which gives us same feeling as we are using mobile app

## C) Have you used any strategy to optimize the performance of the list generated for the first feature?
```Yes```
- I saved the fetched data in redux store, so it can be accessed in any other part of the projects without refetching
- For the cocktail detail fetch, if it is already fetched then it skips to fetch again.
  (You can see the progress bar when you click the cocktail detail first time, but never see it again for the same cocktail)

## D) Additional comments
- I defined eslint rules which I like to follow
- I defined API endpoint in configuration file, so that it can be easily changed for dev or production env
  There you can also define API keys, version number and etc
- I used Immutable.js for javascript object mutation
- Reselect library is used for selection data from redux store
- Defined constant file for static data