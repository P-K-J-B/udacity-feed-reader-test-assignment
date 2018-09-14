/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page? 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /*checks to see whether each 'feed' object in the allFeeds array 
        has a URL property defined which is not an empty string*/
        it('have URLs', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            };
        });

        /*checks to see whether each 'feed' object in the allFeeds array
        has a name property defined which is not an empty string*/
        it('are named', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            };
        });
    });

    describe('The menu', function() {

        /*The method through which the menu is hidden in the DOM manupulation
        is by adding and removing a single ".menu-hidden" class to the body
        element. This initial test simply expects the body element to have
        the .menu-hidden class.*/
        it('is hidden by default', function() { 
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /*Simulates a click event on the menu icon and checks to see whether
        doing so adds the .menu-hidden class to the body element. Triggers
        another click and checks to see if has been removed.*/
        it('appears/disappears when the menu icon is clicked', function() { 
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('a.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /*With the laodFeed(); function being asynchronous, we use the beforeEach();
        function to run loadFeed(); and wait for it to complete before running our
        tests. This test is to determine if, after running, loadFeed(); successfuly 
        adds .entry content to the load .feed container. We do this by checking that
        the total number of .entry class elements in the .feed container is more than 0.
        */
        it('should include at least 1 entry in the .feed container', function() {
            expect($('.feed .entry').length).not.toBe(0);
        });

    });

    /*Tests whether moving to a new feed changes the content in the .feed container 
    element. The beforeEeach(); function declares the oldContent variable to equal the html
    content that is currently inside the .feed container - it then runs the loadfeed();
    function once to populate the .feed container with content from the first feed and 
    finaly runs loadfeed(); a second time (this time with the second feed) to simulate 
    the "change in selection". After this process is "done" the newContent variable is 
    defined as equal to the html content currently in the .feed container and the test
    expects new content NOT to be identical to the last.*/
    describe('New Feed Selection', function() {
        var oldContent,
        newContent;

        beforeEach(function(done) {
            loadFeed(0, function() {
                oldContent = $('.feed').html();
                loadFeed(1, function() {
                    newContent = $('.feed').html();
                    done();
                });
            });
        });
        
        it('changes content in .feed container', function() {
            expect(newContent).not.toBe(oldContent);
        });
    });

}());
