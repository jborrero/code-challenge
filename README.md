# Flickr Tag Search Tool

Given the problem, I decided that the solution was probably best done as an angular.js app of some kind. It was a little outside my wheelhouse, but I gave it a shot.

My apologies to anyone who is actually a UI developer.

I based the solution off of the Angular Phone tutorial in order to spend more time playing with the Flickr API calls than getting started from scratch.
Most of my code falls in the /js and /partials directories.

Some improvements that could be done off the bat:

* There are no tests for this tool
* Currently the tool only returns the first 100 results from the search; I commented where a call could be made to the search API with an additional page parameter, but I did not actually implement the page-selector component
* The photo details page could have additional meta data as well as a larger photo on display; I ran out of time but the page is still there to demonstrate how I would make a call to the getInfo API method upon selecting a photo from the list.
* The above point could also be displayed on the search page itself, with the meta data popping up on-click (given time and familiarity)
* The $http calls to the Flickr API could probably be done in a better way, perhaps as a service using the ngResource module
* It could look a lot nicer..


###To run the app:

Run "npm install" in the project directory to install dependencies.

Run "npm start" to start up the app.

The app should be running at `http://localhost:8000/app/index.html`.


If there are any issues, feel free to contact me at jborrero@gmail.com
