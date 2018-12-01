/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var max = 0;
    var second = 0;
    
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            second = max;
            max = nums[i];
        } else if (nums[i] != max && nums[i] > second) {
            second = nums[i];
        }
    }
    return second;
}