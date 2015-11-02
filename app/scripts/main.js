/* global requirejs */

(function() {
    'use strict';

    requirejs.config({
        baseUrl: 'scripts',
        paths: {
            jquery: '../lib/jquery/dist/jquery',
            knockout: '../lib/knockout/dist/knockout',
            jsforce: '../lib/jsforce/build/jsforce'
        },
        shim: {}
    });

    require([
        'jquery',
        'knockout',
        'modules/login/main',
        'org/main',
        'modules/components/main'
    ], function($, ko, conn, org) {
        org.init();
        // put initialisation stuff here
        conn.init()
            .done(function(fCon) {
                org.setConnector(fCon);
                org.getUserProfile();
            })
            .fail(function(err) {
                console.error('Error logging in.');
                console.log(err);
                // setDisplayMode(false, false);
                // doLogin();
                // notifier.error('Log in unsuccesful. Please try again.');
            });




    });
}());
