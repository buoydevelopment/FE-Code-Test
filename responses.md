**Questions:**

#### A) Describe the strategy used to consume the API endpoints and the data management.

The API requests were handled using Retrofit and RxJava libraries. The endpoints are described in a Kotlin interface, which then Retrofit uses to generate functions that respond asynchronously with the server response.

A deserialization library called Moshi is responsible for taking the JSON responses, and creating Kotlin objects. It integrates with Retrofit to do the deserialization when the server response arrives, so it&#39;s transparent to the developer.

#### B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?

The Model-View-Presenter pattern was chosen to architecture the app. MVP is used on Android because it offers a way to separate background and asynchronous tasks like network requests and processing, from foreground tasks like the UI (Activities, Fragments, Views).

RxJava was chosen to simplify and abstract the handling of threading and asynchrony.

Both are extremely popular in the Android development world, and I think it&#39;s a good practice to use them in large applications, since they simplify concurrency and Android lifecycle problems, and thus reduce errors and crashes.

#### C) Have you used any strategy to optimize the performance of the list generated for the first feature?

The native component of the Android SDK, RecyclerView, was used to show the list efficiently.
RecyclerView uses the ViewHolder pattern. It keeps only the visible elements in memory, reusing the views as the user scrolls, allowing for fast and smooth scroll.

#### D) Would you like to add any further comments or observations?

I felt like the cocktail detail endpoint could be improved. It returns an array with 1 element which can be confusing. Inside that element, the lists of ingredients, instructions and measures have hardcoded keys which are complicated to deserialize, and can cause runtime errors. It would be much better if the endpoint returned an object with its lists of ingredients, instructions and measures represented using data structures like arrays or maps.

Also, some of those keys included nulls, empty strings, or white strings. Having a consistent empty value like null would be more efficient
