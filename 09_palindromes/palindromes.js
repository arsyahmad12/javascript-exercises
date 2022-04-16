const palindromes = function (string) {
    newString = string.replace(/[^\w]/g, "").toLowerCase()
    return (newString === reverseString(newString))
};

const reverseString = function(str) {
    reversedString = ""
    for (let i = 1; i <= str.length; i++) {
        reversedString += str[str.length - i]
    }
    return reversedString
};

console.log(palindromes("Racecar!"))
// Do not edit below this line
module.exports = palindromes;
