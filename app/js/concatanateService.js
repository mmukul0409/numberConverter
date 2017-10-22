'use strict';

var concatanate = function() {

    var concatnateNumbers = function(input1, input2) {
        if (input2 > 0)
            return input1 + " and " + input2 + "/100";
        else return input1 + " only";
    };

    return {
        concatanate: concatnateNumbers
    };
};

app.factory('ConcatenationService', concatanate);