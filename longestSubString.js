/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var object = {};
  var higestCount = 0;
  for(var i = 0; i< s.length; i++){
    if(object[s[i]] === undefined){
      object[s[i]] = 1;
    } else{
      if(Object.keys(object).length > higestCount){
        higestCount = Object.keys(object).length;
      }
        object = new Object;
        object[s[i]] = 1;
        console.log(object)
    }
  }
  console.log(object)
  if(Object.keys(object).length > higestCount){
    higestCount = Object.keys(object).length;
  }
  return higestCount;
};

// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("bbbbbb"))
// console.log(lengthOfLongestSubstring("pwwkew"))
// console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("dvdf"));
