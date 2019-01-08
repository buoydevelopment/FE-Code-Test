# CODE-TEST BRANCH README FILE.

 
<img src="https://raw.githubusercontent.com/martinCouso/FE-Code-Test/code-test/App/Images/cocktails_app.jpg" alt="cocktail hero image" align="center" />



## Questions:

A) Describe the strategy used to consume the API endpoints and the data management.

To consume the API endpoints actions are being intercepted by redux-sagas where 
the generators functions end up executing the fetchs, most of the times once 
that this async tasks are performed a second actions is dispatched to persist 
the result in the Redux Store.

B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?

The library used for routing was react-navigation because is the most customizable one and comes within my favourite boilerplate.
In case of facing an app that targets thousands of users i may switch to react-native-navigation that uses the native APIs and has a lower chance 
to block the JS thread if the app becomes really huge.


C) Have you used any strategy to optimize the performance of the list generated for the first feature?

Yes, i have used the FlatList Component with the  removeClippedSubviews property set to true and the 
initialNumToRender property set to 10 to improve the optimization and load time, also the list is only
requested from the api the first time the component mounts or in case that the user manually triggers the
refreshControl.

D) Would you like to add any further comments or observations?

Some test were created to exemplify but most of them are in the TODO list because of the time restrictions. 
Also, since the boilerplate is pretty robust it may be some dependencies that are not being used at the moment.
