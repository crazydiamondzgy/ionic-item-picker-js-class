angular.module('ufind1', ['ionic', 'ionic-item-picker'])
    .run(function ($ionicPlatform, $state) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("height_login", {
                url: "/height_login",
                templateUrl: "templates/user/height_login.html",
                controller: "height_loginCtrl"
            })

        $urlRouterProvider.otherwise("/height_login");
    })
    .controller('height_loginCtrl', function ($scope, $state) {
        $scope.heightOption = {
            itemList: [],
            itemSelected: 3
        };

        $scope.heightOption.itemList.push("wallet");
        $scope.heightOption.itemList.push("bag");
        $scope.heightOption.itemList.push("computer");
        $scope.heightOption.itemList.push("mobile");
        $scope.heightOption.itemList.push("keypairs");
        $scope.heightOption.itemList.push("car");
    });