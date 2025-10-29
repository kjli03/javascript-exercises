const sumAll = function(start, end) {
    sum = 0;
    if (start > end) {
        temp = start;
        start = end;
        end = temp;
    }
    if (start !== Math.floor(start) || end !== Math.floor(end)) {
        return "ERROR";
    }
    if (start < 0 || end < 0) {
        return "ERROR";
    }
    if (typeof(start) !== "number" || typeof(end) !== "number") {
        return "ERROR";
    }
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
