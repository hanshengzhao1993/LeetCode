var numPalindrome = function (number) {
  var nthPlace = null;
  var currentDividingNum = null;
  while(number > 10){
    nthPlace = Math.floor(Math.log10(number));
    currentDividingNum = Math.pow(10, nthPlace);
    if( number % 10 !==  Math.floor(number / currentDividingNum)){
      return false;
    }
    number = number - Math.floor(number / currentDividingNum);
    number = number - ( currentDividingNum * Math.floor(number / currentDividingNum) );
    number = number / 10;
  }
  return true;
}


console.log(numPalindrome(313));
console.log(numPalindrome(3113));
console.log(numPalindrome(31553));