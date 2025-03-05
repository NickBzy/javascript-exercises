const sumAll = function(start, end) {
    if ((start<0 || end<0) || 
    (!Number.isInteger(start) || !Number.isInteger(end))) {
        return "ERROR";
    }
    numberElements = Math.abs(end-start)+1
    return (numberElements/2 * (start+end));
};

// Do not edit below this line
module.exports = sumAll;
