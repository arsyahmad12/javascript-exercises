const sumAll = function(startNum, endNum) {
    sum = 0;
    if (!Number.isInteger(startNum) || !Number.isInteger(endNum)) {
        return "ERROR"
    } else if (startNum >= 0 && endNum >= 0) {
        if (startNum <= endNum) {
            for (let i = startNum; i <= endNum; i++) {
                sum += i
            }
        } else if (endNum < startNum) {
            for (let i = endNum; i <= startNum; i++) {
                sum += i
            }
        }
    } else {
        return "ERROR"
    }
    return sum
};
// Do not edit below this line
module.exports = sumAll;
