const removeFromArray = function(list, arg1, arg2, arg3, arg4) {
    for (let i = 1; i < arguments.length; i++) {
        let temp = list.indexOf(arguments[i]);
        if (temp >= 0) {
            list.splice(temp, 1);
        }
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
