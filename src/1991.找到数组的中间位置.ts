/*
 * @lc app=leetcode.cn id=1991 lang=typescript
 *
 * [1991] 找到数组的中间位置
 */

// @lc code=start
function findMiddleIndex(nums: number[]): number {
  let index = 0
  let left = 0
  let right = nums.reduce((a, b) => a + b, 0) - nums[0]
  while (index < nums.length) {
    if (left === right)
      return index
    left += nums[index]
    right -= nums[index + 1]
    index++
  }
  return -1
}
// @lc code=end
