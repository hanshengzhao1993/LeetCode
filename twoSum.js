/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var numsObject = {};
  for(var i = 0; i< nums.length; i++){
    console.log(nums[i])
    if( numsObject[target - nums[i]] !== undefined ){
      return true;
    } 
    if( numsObject[nums[i]]=== undefined){
      numsObject[nums[i]] = i;
    }
  }
  return false;
};


console.log(twoSum([1,2,3,4,5], 3))