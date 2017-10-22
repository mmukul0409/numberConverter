app.controller("checkController", function($scope, EnglishCheckWriter, ConcatenationService) {

    $scope.title = "CheckWiterApplication";

    $scope.toEnglish = function(input) {
        var result = Math.round(input * 100) / 100;
        var numArray = result.toString().split('.');
        var integerPart = numArray[0];
        var decimalPart = numArray[1];
        var numInEnglish = EnglishCheckWriter.convertCheck(integerPart);
        $scope.finalnumInEnglish = ConcatenationService.concatanate(numInEnglish, decimalPart);
    };


});