'use strict';

var checkWriter = function() {

    var numbersBelowTen = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    var numbersBelowTwenty = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    var numbersBelowHundred = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];


    var convertToWords = function(num) {
        var result = "";

        if (num < 10) result = numbersBelowTen[num]
        else if (num < 20) result = numbersBelowTwenty[num - 10];
        else if (num < 100) result = numbersBelowHundred[parseInt(num / 10)] + " " + convertToWords(num % 10);
        else if (num < 1000) result = convertToWords(parseInt(num / 100)) + " Hundred " + convertToWords(num % 100);
        else if (num < 1000000) result = convertToWords(parseInt(num / 1000)) + " Thousand " + convertToWords(num % 1000);
        else if (num < 1000000000) result = convertToWords(parseInt(num / 1000000)) + " Million " + convertToWords(num % 1000000);
        else result = convertToWords(parseInt(num / 1000000000)) + " Billion " + convertToWords(num % 1000000000);
        return result;
    };

    var validateNumber = function(input) {
        var regx = /^[A-Za-z0-9]+$/;
        if (input == 0) return "Zero";
        if (input < 0) return "Please enter Positive Digits Only";
        if (input.toString().length > 12) return "Please Enter a smaller Digit";
        if (!regx.test(input)) return "Illegel characters , please enter Positive Digits only";
        return convertToWords(input);
    };

    return {
        convertCheck: validateNumber
    };
};

app.factory('EnglishCheckWriter', checkWriter);