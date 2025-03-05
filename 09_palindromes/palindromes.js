const palindromes = function (string) {
    string = string.replace(/[^a-zA-Z0-9]/g, "");
    reversed = []
    for (let i=string.length-1; i>=0; i--){
        reversed.push(string[i]);
    }
    reversedString = reversed.join("").toLowerCase();
    return string.toLowerCase() === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
