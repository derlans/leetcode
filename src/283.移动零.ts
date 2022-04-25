/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let left = 0
  let right = 0
  while (right < nums.length && left < nums.length) {
    if (nums[left] !== 0) {
      left++
      continue
    }
    if (nums[right] !== 0 && nums[left] === 0 && right > left) {
      nums[left] = nums[right]
      nums[right] = 0
    }
    right++
  }
}
// @lc code=end
