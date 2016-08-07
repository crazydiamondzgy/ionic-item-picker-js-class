angular.module('ufind1')
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("height_login", {
                url: "/height_login",
                templateUrl: "templates/user/height_login.html",
                controller: "height_loginCtrl"
            })

        $urlRouterProvider.otherwise("/height_login");
    });