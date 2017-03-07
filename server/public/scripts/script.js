var myApp = angular.module('BookApp', []);

myApp.controller('BookController', ['$http', function($http){
  console.log('book controller created');

  var self = this;
  self.bookList = [];
  self.newBook = {};

  getBooks();

  function getBooks(){
    $http({
      method: 'GET',
      url: '/books'
    }).then(function(response){
      console.log(response.data);
      self.bookList = response.data;
    });
  }//end function



  self.addBook = function(){
    console.log('clicked!!');
    $http({
      method: 'POST',
      url: '/books',
      data: self.newBook
    }).then(function(response){
      getBooks();
      self.newBook = {};
      console.log('clicked!!');
    });
  } // end addBook function

}]); //ends BookController
