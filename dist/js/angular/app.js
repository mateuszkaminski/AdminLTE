var countryApp = angular.module('myApp', ['ngRoute']);

countryApp.config(['$routeProvider', '$locationProvider', function AppConfig($routeProvider, $locationProvider) {
    $routeProvider.

    when('/', {
        templateUrl: 'templates/main.html'
    }).
    when('/aaa', {
        template: 'aaaa'
    });


}]);

countryApp.controller('mainCtrl', function ($scope, $http){
    $http.get('services/page.json').success(function(data) {
        $scope.name = data.site_config.name;
        $scope.username = data.user_info.name +" "+ data.user_info.surname;
        $scope.mainMenu = data.main_menu;
    });
});
