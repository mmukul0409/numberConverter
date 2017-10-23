'use strict';

var concatanate = function() {

    var concatnateNumbers = function(integerPart, decimalPart) {
        if (decimalPart > 0)
            return integerPart + " and " + decimalPart + "/100";
        else return integerPart + " only";
    };

    return {
        concatanate: concatnateNumbers
    };
};

app.factory('ConcatenationService', concatanate);