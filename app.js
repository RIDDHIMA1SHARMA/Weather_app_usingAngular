var app = angular.module("weatherApp", []);

app.controller("WeatherController", function ($scope, $http) {
    $scope.city = "New York"; // Default city
    $scope.weather = null;
    $scope.errorMessage = "";

    $scope.getWeather = function () {
        var apiKey = "YOUR_OPENWEATHERMAP_API_KEY";  // Replace with your API key
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${$scope.city}&units=metric&appid=${apiKey}`;

        $http.get(url)
            .then(function (response) {
                $scope.weather = response.data;
                $scope.errorMessage = "";
            })
            .catch(function (error) {
                $scope.weather = null;
                $scope.errorMessage = "City not found!";
            });
    };
});
