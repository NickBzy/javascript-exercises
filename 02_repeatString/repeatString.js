const repeatString = function(string, numberOfRepeats) {
    if (numberOfRepeats<0) return "ERROR"
    updatedString = ""
    for (let i=0; i<numberOfRepeats; i++){
        updatedString += string
    }
    return updatedString
};

// Do not edit below this line
module.exports = repeatString;
