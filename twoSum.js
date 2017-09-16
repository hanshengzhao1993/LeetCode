/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var numsObject = {};
  for(var i = 0; i< nums.length; i++){
    if( numsObject[target - nums[i]] !== undefined ){
      return [ numsObject[target - nums[i]] ,i];
    } 
    if( numsObject[nums[i]]=== undefined){
      numsObject[nums[i]] = i;
    }
  }
  return [];
};


console.log(twoSum([3,2,4], 6))