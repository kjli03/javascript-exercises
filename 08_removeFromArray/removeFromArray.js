const removeFromArray = function (array, ...args) {
    ans = [];
    for (let i = 0; i < array.length; i++) {
        if (!args.includes(array[i])) {
            ans.push(array[i]);
        }

    }
    return ans;

};

// Do not edit below this line
module.exports = removeFromArray;
