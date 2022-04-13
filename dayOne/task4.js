// TASK 4: Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
/* 
@param {number[]} nums
@param {number} target
@return {number} 
*/
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 6;
function search(nums = [], target) {
    const helper = (low, high) => {
        if (low > high) {
            return -1
        }
        const middle = Math.floor((low + high) / 2)
        if (nums[middle] === target) {
            return middle
        } if (nums[middle] < target) {
            return helper(middle + 1, high)
        }
        return helper(low, middle - 1)
    }
    return helper(0, nums.length - 1)
}

console.log(search(nums, target));