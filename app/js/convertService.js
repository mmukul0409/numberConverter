'use strict';

var checkWriter = function() {

    var numbersBelowTen = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    var numbersBelowTwenty = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    var numbersBelowHundred = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];


    var convertToWords = function(number) {
        var englishWord = "";

        if (number < 10) englishWord = numbersBelowTen[number]
        else if (number < 20) englishWord = numbersBelowTwenty[number - 10];
        else if (number < 100) englishWord = numbersBelowHundred[parseInt(number / 10)] + " " + convertToWords(number % 10);
        else if (number < 1000) englishWord = convertToWords(parseInt(number / 100)) + " Hundred " + convertToWords(number % 100);
        else if (number < 1000000) englishWord = convertToWords(parseInt(number / 1000)) + " Thousand " + convertToWords(number % 1000);
        else if (number < 1000000000) englishWord = convertToWords(parseInt(number / 1000000)) + " Million " + convertToWords(number % 1000000);
        else englishWord = convertToWords(parseInt(number / 1000000000)) + " Billion " + convertToWords(number % 1000000000);

        return englishWord;
    };

    var validateNumber = function(input) {
        var numberToConvert = parseInt(input);
        if (numberToConvert == 0) return "Zero";
        if (numberToConvert < 0) return "Please enter Positive Digits";
        if (numberToConvert.toString().length > 12) return "Please Enter a smaller Digit";
        return convertToWords(numberToConvert);
    };

    return {
        convertCheck: validateNumber
    };
};

app.factory('EnglishCheckWriter', checkWriter);