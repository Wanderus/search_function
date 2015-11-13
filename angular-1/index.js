var search = angular.module('searchFunction', ['ngResource']);





search.controller('SearchController', ['$scope', '$resource', function($scope, $resource) {

    $scope.RIDBAPI = $resource("https://ridb.recreation.gov/api/v1/recareas.json"

            /*
            {callback: "JSON_CALLBACK"},
            {get: { method: "JSONP"}

        }
        */
        );

            // APPID: b144ee0325efa9074ccfd6a69f81bfc9

            $scope.queryResult = $scope.RIDBAPI.get({ apikey: '1D852276B76740FE8BCB99059BFD7AE0' });

            console.log($scope.queryResult);

            var result = angular.fromJson($scope.queryResult);
            console.log(result);





}]);
