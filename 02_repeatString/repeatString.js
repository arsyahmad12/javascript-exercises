const repeatString = function(string, num) {
    let str = ""
    if (num < 0) return "ERROR"
    for (let i = 0; i < num; i++) {
        str = str + string;
    }
    return str
};

console.log(repeatString("Wow", 5))

// Do not edit below this line
module.exports = repeatString;
