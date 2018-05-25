# Code Challenge

## Install Instructions:

Generate project using CocoaPods:
pod install

Open: CocktailsChallenge.xcworkspace

## Questions:

A) Describe the strategy used to consume the API endpoints and the data management.
Main list need 3 api calls to be shown:
First call to get main list objects it is an async call when the view controller is loaded. Then we have:
- Ingredients call: this is a light service, so we can just iterate and get the rest of the information. 
- Image call: this api get heavy images, so the strategy is get them on demand thinking in the usage of the network. When the user get the cell it make the request for the image, if for some reason the user makes fast scroolling the pending request for non seen cells will be canceled and just the cells on the screen whil have an active request.

B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?
I use alamofire to handle the network request, it make easy way to handle the network async calls, handle request queues, etc.  If the api will ansuwer many objects the best way will be to paginate the answer.

C) Have you used any strategy to optimize the performance of the list generated for the first feature?
The strategy permormance key points are:
- Get the light api call for cocktails details without wait for the demand. 
- Get the heavy images on demand.
- Use Kingfisher to cache already downloaded images. 
- Use Kingfisher to process only one time the image and save it with round borders, to avoid futures process of corner views.
- Cancel pending request of images that are not on the screen.
- Avoid clear/translusent background on view cells. 
- Avoid round corners and shadows at the same time would be good for the performance, but it was part of the requirements.

D) Would you like to add any further comments or observations?
To make and efficient and faster list, the first api call need to bring all the needed data to fill data on the cell (i mean the ingredients call) and leave just the cocktail image call as a second job. It is not to much information to justify a network call just for that. 
Prioritizing the deadline, i had use MVC, with more time i would consider MVVM pattern if fit better. No time to error handling (in case some api call fail, user wont get a message), networks status check, reload funciontality for main list, Swiflint run. 
If the ingredients api call would be more network expensive, a more complex solution would fit better, some on demand strategy similar to the one used on the images. There is always space room to improve performance. 
 