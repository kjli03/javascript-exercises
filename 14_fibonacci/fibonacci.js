const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0) {
        return "OOPS";
    }
    let fib = [0, 1, 1, 2, 3, 5, 8];
    for (let i = 6; i < num + 1; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
