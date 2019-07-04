/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arrIndex = []
    var nums2 = nums;
    for(var i = 0; i < nums.length; i++) {
      let num1 = nums[i]
      let num2 = 0
      for(var j = 0; j < nums2.length; j++) {
        if (j === i) {
           continue;
        } else {
            num2 = nums2[j]
            let total = num1 + num2
            if(total === target) {
             arrIndex.push(i)
             arrIndex.push(j)
             break;
            }
        }
      } 
      if(arrIndex.length > 0) {
          break;
      }
    }
    return arrIndex
};