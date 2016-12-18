/**
 * Created by leon on 17/12/16.
 */
'use strict';


angular
.module('myApp', [
    "firebase",
    "chart.js"
])

.controller('MainCtrl', function($scope, $firebaseObject, $firebaseArray) {

    var ref = firebase.database().ref().child("data");
    // download the data into a local object
    var syncObject = $firebaseObject(ref);
    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    syncObject.$bindTo($scope, "data");

    $scope.labels = [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16,17,18,19,20];
});