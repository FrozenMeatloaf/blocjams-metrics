//angular.module('blocJams', []); //1rst arg is name of module, 2nd is empty array which injects dependencies
//angular.module('blocJams', ['ui.router']);
(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({ //hashBang URLs are disabled
            enabled: true,
            requireBase: false
        });

        $stateProvider
            .state('landing', {
                url: '/',
                templateUrl: '/templates/landing.html'
            })
            .state('album', {
                url: '/album',
                templateUrl: '/templates/album.html'
            });
      }



    angular
        .module('blocJams', ['ui.router'])
        .config(config);
})();
