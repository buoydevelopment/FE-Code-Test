## Seabstian Muñiz Front End Code Challenge

	Hi! I hope is not too late to submit my solution.
	I had some troubles with the API, It was throwing me 500 status when requesting from the browser.
	I also tried to make the call from other apps(that I developed previously but was the same 500 status). So i decided to wait a day for the fix.
	Finally on saturday night I realize the API was sending everything right.

## To run the project.
	1 - Make sure you're on '/test-app' directory and execute 'npm install'.
	2 - After install has been completed, execute 'npm start'.
	

## Questions:

A) Describe the strategy used to consume the API endpoints and the data management.

	-I have a service module where i make all http calls, I expose an object that provides methods to get the resources.
		All the methods return promises, so I can chain '.then()' when calling it from my component.
		I have 3 containers App, MainView and DetailView.
		I'm making the call for the whole drinks list inside App container in it's 'componentDidMount' method and storing the drinks list inside App state and passing it to MainView.
		In the case of the drinks details call I'm making the call from Detail container inside the 'componentDidMount' lifecycle method, grabbing the id parameter from the route.
		I used native fetch API to make the http calls, if you need to support IE lower tan 11 you will need to install whatwg-fetch
		Sometimes I like to use Axios library for this purpose.


B) Explain which library was used for the routing and why. Would you use the same for a consumer facing app targeting thousands of users? Why?

	- I'm using 'react-router-dom', I would say is almost the de-facto library to do routing in react. This is its version 4, is stable, flexible, It give you the posibility of render and compose routes dynamically. I would use it in a big app because i think is the best solution out there and they also provide support for react native with the same API, just diferent packages.
	I think routing is an essential part of any app(even this), because routing give you the ability to jump into a specific state on the app.


C) Have you used any strategy to optimize the performance of the list generated for the first feature?

	I have not, I'm using an spinner to show something to the use meanwhile.


D) Would you like to add any further comments or observations?

	Yes, please.
	I'm using create-react-app as a CLI to create the boilerplate for this app.
	The app has a containers folder, these are components are resposible for fetching data and can be used like a parent to component to render a route.
	It has a component folder where we can find reusable components like:
	- 'Card' used in both views(main and Detail).
	- LoaderHOC is a High Order Component as it name describe, It takes a component as an argument and look for data the component needs, if it's doesn't have it, will display a 		  Spiner componnet.
	- Spinner, well it's a spinner, I have used it inside LoaderHOC and also inside DetailView alone to demonstrate that can be used anywhere.
	- SearchHeader contains the search functionality

	I didn't want to add any dependencies aside of react-router-dom and CRA dependencies. So I decided to use Unicodes for the icons.
	I didn't used any specific method to style the app becasue it was just a test, but when starting a real project I would always decide first which approach we are going to use(styled-components, CSS-Modules, SASS, LESS, Style-Loader).

	I have spent around 6 hours(probably a little more) doing it, I always like to start developing a project as a prototype, So if my client like the concept I can Iterate over it quicklier.

	
	I haven't added the ingredients as shown in the first wireframe, because API endpoint wsn't providing me with that data, but i I think I Could have used HTML5 visibility API to fetch for only those who where at sight at that moment.
	That's all.

	Looking forward to hearing from you!