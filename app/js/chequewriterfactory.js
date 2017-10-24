'use strict';

var checkWriter = function() {

    var numbersBelowTen = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var numbersBelowTwenty = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var numbersBelowHundred = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];


    var convertToWords = function(number) {
        var englishWord = "";

        if (number < 10) englishWord = numbersBelowTen[number]
        else if (number < 20) englishWord = numbersBelowTwenty[number - 10];
        else if (number < 100) englishWord = numbersBelowHundred[parseInt(number / 10)] + " " + convertToWords(number % 10);
        else if (number < 1000) englishWord = convertToWords(parseInt(number / 100)) + " hundred " + convertToWords(number % 100);
        else if (number < 1000000) englishWord = convertToWords(parseInt(number / 1000)) + " thousand " + convertToWords(number % 1000);
        else if (number < 1000000000) englishWord = convertToWords(parseInt(number / 1000000)) + " million " + convertToWords(number % 1000000);
        else if (number < 1000000000000) englishWord = convertToWords(parseInt(number / 1000000000)) + " billion " + convertToWords(number % 1000000000);
        else englishWord = convertToWords(parseInt(number / 1000000000000)) + " trillion " + convertToWords(number % 1000000000000);
        return englishWord;
    };

    var validateNumber = function(input) {
        var numberToConvert = parseInt(input);
        if (numberToConvert == 0) return "Zero";
        if (numberToConvert < 0) return "Please enter positive digit";
        if (numberToConvert.toString().length > 14) return "Please Enter smaller Digit";
        return convertToWords(numberToConvert);
    };

    return {
        convertCheck: validateNumber
    };
};

app.factory('ChequeWriterFactory', checkWriter);