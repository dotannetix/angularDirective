(function() {
	angular.module("app").factory("counterService", counterService)

	function counterService($timeout) {
		var title="counter service";
		var result=0;
		counter:0;
		function getCounter(){
			return counter;
		}
		function setCounter(num){
			counter=num;
			result = num;			
			
		}
		return {
			title:"counter",
			set:setCounter,
			get:getCounter,
			result:result
		}
	}

})(); 