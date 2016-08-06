/**
 * Created by Administrator on 16-7-25.
 */
angular.module('ufind1.controllers', [])
    .controller('height_loginCtrl', function ($scope,$state) {
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


        $scope.onClickNext = function(){
            $state.go("weight_login");
            console.log("下一步----- " );
        }
    });