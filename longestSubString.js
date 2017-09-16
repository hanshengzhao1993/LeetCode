/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var obj = {};
  var max = 0;

  for(var i =0, j =0; i < s.length; i++){
    if( obj[s[i]] !== undefined ){
      j = Math.max( j, obj[s[i]] + 1 );
    }
    obj[s[i]] = i;
    max = Math.max( max, i - j + 1 );
  }

  return max
};

console.log(lengthOfLongestSubstring("abcabcbb") === 3)
console.log(lengthOfLongestSubstring("bbbbbb") === 1)
console.log(lengthOfLongestSubstring("pwwkew") === 3)
console.log(lengthOfLongestSubstring("aab")=== 2);
console.log(lengthOfLongestSubstring("dvdf") === 3);
