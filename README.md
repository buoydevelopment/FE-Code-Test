# LetsMakeThatCocktail! (android code challenge)

## Questions

### A) Describe the strategy used to consume the API endpoints and the data management.

I think the first factor that affects this is the architecture used for the project.
For some time now I have been using MVVM as my go-to architecture.
One of the key benefits of this pattern is that it helps separate the way you implement the UI from the logic behind it.

More related to how the API is consumed though, in this case the ViewModel talks to the CocktailsRepository, who is responsible for delivering the information about the cocktails.
This repository communicates with the NetworkManager, who is the one that actually knows how to consume the API methods.
With this approach the repository could fetch the cocktails' information from some other data source and that would not affect the ViewModel. The only component that depends on how the API calls are actually developed is the NetworkManager. The Repository is unaware of changes in the API implementation as long as the overall logic and models are unchanged.

### B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?

I used Retrofit for Networking. There are several reasons why I use it.
One of them is simplicity, since it helps abstract some of the HTTP logic and focus basically just on the API logic (methods, params, models, errors, etc.)

It's also very widely used, so there's a lot of community examples, tutorials, answers, etc.
It doesn't have any performance issues that I know of, so I can't think right now of any reason why I would not use it in a production environment with lots of users.
It also allows some cache thechniques which might be suitable for an app with so many users (more on this below).

## C) Have you used any strategy to optimize the performance of the list generated for the first feature?

Yes, I implemented a simple cache mechanism, and for several reasons.
First of all, the way it's implemented you can access cached information if you are offline. (for simplicity reasons I am not letting the user know they are offline, which is something that should probably be done in a consumer facing app).

Secondly, given the nature of the API (information that will most likely not vary a lot), it is unnecessary in my opinion to fetch the data remotely every time.

Also, the API doesn't allow paging from what I saw, so every request brings all the cocktails from the server every time, so it makes even more sense to cache the requests.

And last, if you are calling an API from a third party service and have a certain quota or are charged based on the number of requests it would be a good way to optimize requests to the server.

### D) Would you like to add any further comments or observations?

None that I can think of right now, though I would love to discuss the approach taken and learn from other people's insights and techniques.

Some things to improve that were not done because of time restrictions but would most likely be done for a consumer facing app:

- Add the bonus point feature
- Add unit tests
- Add pull to refresh to the list
- Add a placeholder for the images
- Show indicator when there is no internet connection and user is viewing cached content
