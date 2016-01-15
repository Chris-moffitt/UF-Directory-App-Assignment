angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.addListing = function() {
	$scope.listings.push({'name':$scope.Name , 'code':$scope.Code , 'address':$scope.Address , 'coordinates':{'latitude':$scope.Latitude , 'longitude':$scope.Longitude}})
	$scope.Code='';
	$scope.Name='';
	$scope.Address='';
	$scope.Latitude='';
	$scope.Longitude='';
    };
    $scope.deleteListing = function(name) {
		var index = -1;		
		var comArr = eval($scope.listings );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.listings.splice( index, 1 );
    };
    $scope.showDetails = function(name) {
		var index = -1;		
		var comArr = eval($scope.listings );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.detailedInfo=Listings[index];
    };
  }
]);
