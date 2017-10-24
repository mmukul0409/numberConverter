app.controller("chequeController", function($scope, ChequeWriterFactory, ConcatenationFactory) {

    $scope.title = "ChequeWiterApplication";

    $scope.toEnglish = function(input) {
        if (input && !isNaN(input)) {
                var result = Math.round(input * 100) / 100;
                var numArray = result.toString().split('.');
                var integerPart = numArray[0];
                var decimalPart = numArray[1];
                var numInEnglish = ChequeWriterFactory.convertCheck(integerPart);
                $scope.finalnumInEnglish = ConcatenationFactory.concatanate(numInEnglish, decimalPart);
        } else {
            $scope.finalnumInEnglish = "Invalid entry. Please enter a number to continue";
        }
    };

    $scope.reset = function() {
        $scope.input = "";
        $scope.finalnumInEnglish = "";
    }
});

app.filter('capitalizeFirstLetter', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});