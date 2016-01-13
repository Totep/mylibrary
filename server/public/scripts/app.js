var app = angular.module('app', []);
app.controller("IndexController", ['$scope', '$http', function($scope, $http) {
    $scope.book = {};
    $scope.books = [];
    var fetchBooks = function() {
        return $http.get('/book').then(function(response){
            if(response.status !== 200){
                throw new Error('Failed to fetch books from the API');
            }
            console.log(response.data);
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
       });
    };
    $scope.get = function() {
        $http({
            url: '/book/search',
            method: 'get'
        }).then(function(response){
            $scope.books = response.data;
        })
    };
    $scope.resetForm = function(){


    };
    $scope.hover = function(books) {
        return books.showDelete = ! books.showDelete;
    };
    $scope.remove = function(books){
        alert("Deleting the book " + book.title);hot
        return books.show = false;
    };

}]);