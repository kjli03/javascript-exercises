const palindromes = function (string) {
    string = string.replace(/\W/g, '').toLowerCase();
    let palindrome = "";
    for (let i = string.length; i >= 0; i--) {
        palindrome += string.charAt(i);
    }
    console.log(string);
    palindrome = palindrome.replace(/\W/g, '').toLowerCase();
    if (palindrome == string) {
        return true;
    }
    console.log(palindrome);
    return false;
};

palindromes("test a 123, wow");

// Do not edit below this line
module.exports = palindromes;
