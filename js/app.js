(function(){
	var app =  angular.module("fju-landingpage", []);
	app.controller("landing-page-controller", ['$scope', function($scope){
		$scope.overview = overview();
		$scope.eligibility = eligibility();
		$scope.courses = courses();
	}]);


	app.controller('TabController', ['$scope', function () {
        this.tab = 1;
        this.setTab = function (tabId) {
            this.tab = tabId;
        };

        this.isSet = function (tabId) {
            return this.tab === tabId;
        };
    }]);
})();

function overview(){
	return "course overview...";
}

function eligibility(){
	return "your  eligibility...";
}

function courses(){
	return "your courses...";
}