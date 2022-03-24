const reverseString = function(str) {
    reversedString = ""
    for (let i = 1; i <= str.length; i++) {
        reversedString += str[str.length - i]
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
