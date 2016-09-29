(function() {
	angular.module("app").controller("person", person)

	function person($scope,counterService) {
		$scope.title="This is Person Controller"

		$scope.$on("counterNewAmount",function(event,data){
			$scope.result=data;
		});
		$scope.showCount=function(){
		
			
				$scope.result=counterService.get();
			
			
		}
	}

})();
