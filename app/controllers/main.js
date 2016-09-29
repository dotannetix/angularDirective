(function() {
	angular.module("app").controller("main", main)

	function main($scope) {
		
		$scope.title1 = "This is main Controller"
		//$scope.result = counterService.result;
		$scope.$on("counterUpdated", function(event, data) {
			console.log(event)
			console.log(data)
			$scope.$broadcast('counterNewAmount', data);
		});

	}

})();
