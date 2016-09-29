(function(){
	angular.module("app").directive("card",card)
	
	function card($timeout,$http){
		
		return {
			restrict:"E",
			replace:true,
			templateUrl:"app/templates/card.html",
			link:function(scope,element, attr){
				console.log("element",element)
				element[0].onclick=function(){
					$timeout(function(){
						scope.count++
					})
					
				}
			},
			controller:function($scope){
				console.log("$scope2",$scope)
				$scope.count=1;
			}
			
			
		}
	}
	
})();
