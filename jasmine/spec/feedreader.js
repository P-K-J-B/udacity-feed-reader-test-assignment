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


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('have URLs', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            };
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('are named', function() {
            for (var i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe('');
            };
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        /*The method through which the menu is hidden in the DOM manupulation
        is by adding and removing a single ".menu-hidden" class to the body
        element. This initial test simply expects the body element to have
        the .menu-hidden class.*/
        it('is hidden by default', function() { 
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          /*Simulates a click event on the menu icon and checks to see whether
          doing so adds or removes the .menu-hidden class from the body element.*/
        it('appears/disappears when the menu icon is clicked', function() { 
            $('a.menu-icon-link').click();

            if ($('body').hasClass('menu-hidden')) {
                $('a.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(false);
            } else {
                $('a.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
            }
        });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        /*With the laodFeed(); function being asynchronous, we use the beforeEach();
        function to run loadFeed(); and wait for it to complete before running our
        tests. This test is to determine if, after running, loadFeed(); successfuly 
        adds content to the load .feed container. We do this simply by checking to see
        that the .feed container element is not empty (i.e: a .length property of 0).
        */
        it('should include at least 1 entry in the .feed container', function(done) {
            expect($('.feed').children().length).not.toBe(0);
            done();
        });

    });


    /* TODO: Write a new test suite named "New Feed Selection" */

    /*Tests whether moving to a new feed changes the content in the .feed container 
    element. The beforeEeach(); function declares the oldContent variable to equal the html
    content that is currently inside the .feed container - it then runs the loadfeed();
    function once to populate the .feed container with content from the first feed and 
    finaly runs loadfeed(); a second time (this time with the second feed) to simulate 
    the "change in selection". After this process is "done" the newContent variable is 
    defined as equal to the html content currently in the .feed container and the test
    expects new content NOT to be identical to the last. 

    It then reverts to displaying the initial feed.*/
    describe('New Feed Selection', function() {
        var oldContent,
        newContent;

        beforeEach(function(done) {
            oldContent = $('.feed').html();
            loadFeed(0);
            loadFeed(1, done);
        });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        
        it('changes content in .feed container', function(done) {
            newContent = $('.feed').html();
            expect(newContent).not.toBe(oldContent);
            loadFeed(0);
            done();
        });

    });

}());
