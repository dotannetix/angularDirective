(function() {
	angular.module("app").controller("card", card)

	function card($scope,counterService) {
		$scope.title="This is Card Controller"
		$scope.count=0;
		$scope.add=function(){
			$scope.count++;
			$scope.$emit("counterUpdated",$scope.count);
			counterService.set($scope.count)
		};
	}

})();
