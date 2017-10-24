'use strict';

var concatanate = function() {

    var concatnateNumbers = function(integerPart, decimalPart) {
        
     if (decimalPart > 0)
            return integerPart + " dollars and " + decimalPart + "/100 cents.";
        else return integerPart + " dollars only";
    };

    return {
        concatanate: concatnateNumbers
    };
};

app.factory('ConcatenationFactory', concatanate);