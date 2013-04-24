'use strict';

angular.module('appApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


        $scope.offers = [
            {
                url: "http://i.telegraph.co.uk/multimedia/archive/02370/coffee_2370526b.jpg",
                price: "£ 1.30",
                name: "Starbucks Coffee",
                time: "2 days",
                type: "drink"
            },
            {
                url: "http://www.destination360.com/europe/uk/images/s/british-museum.jpg",
                price: "£ 10",
                name: "British Museum",
                time: "2 hours",
                type: "event"
            },{
                url: "http://cached.imagescaler.hbpl.co.uk/resize/scaleToFit/427/285/?sURL=http://offlinehbpl.hbpl.co.uk/news/OKM/849FAAFD-C098-0A5F-4492F61D3E60DDEF.jpg",
                price: "£ 3",
                name: "London Pride",
                time: "20 mins",
                type: "drink"
            },
            {
                url: "http://4.bp.blogspot.com/-jTESJJXOtpc/UVyFQM-0bcI/AAAAAAAAkZ8/1hKa8yDuLyU/s1600/url-16.jpeg",
                price: "£ 25",
                name: "Zara Jeans",
                time: "4 minutes",
                type: "clothes"
            },{
                url: "http://gb.fotolibra.com/images/previews/537078-rymans-stationers-london-england.jpeg",
                price: "£ 2",
                name: "Ryman Pens",
                time: "22 hours",
                type: "other"
            },
            {
                url: "http://i.telegraph.co.uk/multimedia/archive/02370/coffee_2370526b.jpg",
                price: "£ 1.30",
                name: "Starbucks Coffee",
                time: "2 days",
                type: "drink"
            },
            {
                url: "http://www.destination360.com/europe/uk/images/s/british-museum.jpg",
                price: "£ 10",
                name: "British Museum",
                time: "2 hours",
                type: "event"
            },{
                url: "http://cached.imagescaler.hbpl.co.uk/resize/scaleToFit/427/285/?sURL=http://offlinehbpl.hbpl.co.uk/news/OKM/849FAAFD-C098-0A5F-4492F61D3E60DDEF.jpg",
                price: "£ 3",
                name: "London Pride",
                time: "20 mins",
                type: "drink"
            },
            {
                url: "http://4.bp.blogspot.com/-jTESJJXOtpc/UVyFQM-0bcI/AAAAAAAAkZ8/1hKa8yDuLyU/s1600/url-16.jpeg",
                price: "£ 25",
                name: "Zara Jeans",
                time: "4 minutes",
                type: "clothes"
            },{
                url: "http://gb.fotolibra.com/images/previews/537078-rymans-stationers-london-england.jpeg",
                price: "£ 2",
                name: "Ryman Pens",
                time: "22 hours",
                type: "other"
            }



        ]
  });
