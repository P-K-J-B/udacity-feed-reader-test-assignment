# Feed Reader Test Application

### Directions
Open index.html in a browser of your choice,
Jasmine should run spec tests on various page functionality,
Review test output at the bottom of the web page (all tests should be green/passed)

Specific tests are as follows:
* **RSS feeds are defined** (*the application has successfully pulled feeds from the google feed reader API*)
* **RSS feeds have URLs** (*each feed has a URL attribute defined that is not an empty string*)
* **RSS feeds are named** (*each feed has a name attribute defined that is not an empty string*)
* **The menu is hidden by default** (*the side-bar menu is hidden off screen on page load*)
* **The menu appears/disappears when the menu icon is clicked** (*upon clicking the burger menu icon in the top left hand corner of the window, the "menu-hidden" class is toggled on/off of the body element*)
* **Initial Entries should include at least 1 entry in the .feed container** (*on page load the .feed container should not be empty*)
* **New Feed Selection changes content in .feed container** (*upon navigating to a new feed through the menu, the content in the .feed container changes accordingly - NOTE: this test is run on page load and will immediately navigate to the second feed "CSS Tricks" and then back to the first "Udacity Blog"*)

To modify any of these tests, simply open the feedreader.js file in the jasmine/spec directory and make changes as desired.

### Requirements
index.html requires an internet browser to perform tests.
Confirmed fully functional on: Google Chrome, Firefox, Microsoft Edge & Internet Explorer 11.
