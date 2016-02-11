var app = angular.module('app', []);

app.controller("IndexController", ['$scope', '$http', function($scope, $http) {

    $scope.book = {};
    $scope.books = [];
    var fetchBooks = function() {
        return $http.get('/book').then(function(response){
            if(response.status !== 200){
                throw new Error('Failed');
            }
            $scope.book = {};
            $scope.books = response.data;
            return response.data;
        })
    };
    $scope.insert = function(book) {
       $http({
           url: '/book',
           method: 'post',
           data: book
       }).then(function(response){
           $scope.book = {};
       });
    };
    $scope.get = function() {
        if ($scope.searchText < 3){
            $scope.books = [];
            return;
        }
        $http({
            url: '/book/search',
            method: 'get'
        }).then(function(response){
            $scope.books = response.data;
        })
    };

    $scope.hover = function(books) {
        return books.showDelete = ! books.showDelete;
    };
    $scope.delete = function(book){
        $http({
            url: '/book/remove',
            method: 'remove',
            data: book({})
        }).then(function(response){
            alert("Deleting the book " + book.title);
        })
        return book.show = false;
    };


}]);
