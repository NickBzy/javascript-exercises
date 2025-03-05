const leapYears = function(year) {
    const isDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isDivisbleByFourHundred = year % 400 === 0;
    //A year is considered a leap year if it's:
    //divisible by 4 and 
    //not a century unless 
    //if it's divisible by 400
    return (isDivisibleByFour && !isCentury || isDivisbleByFourHundred)
};

// Do not edit below this line
module.exports = leapYears;
