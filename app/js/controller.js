app.controller("checkController", function($scope, EnglishCheckWriter, ConcatenationService) {

    $scope.title = "CheckWiterApplication";

    $scope.toEnglish = function(input) {
        if(input && !isNaN(input)){
            var result = Math.round(input * 100) / 100;
            var numArray = result.toString().split('.');
            var integerPart = numArray[0];
            var decimalPart = numArray[1];
            var numInEnglish = EnglishCheckWriter.convertCheck(integerPart);
            $scope.finalnumInEnglish = ConcatenationService.concatanate(numInEnglish, decimalPart);
            
        }else{
           $scope.finalnumInEnglish = "Invalid entry. Please enter a number to continue";
        }
    };
    
            $scope.reset = function() {
            $scope.input = "";
            $scope.finalnumInEnglish="";
}
});