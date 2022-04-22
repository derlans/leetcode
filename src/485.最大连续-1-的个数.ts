/*
 * @lc app=leetcode.cn id=485 lang=typescript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
function findMaxConsecutiveOnes(nums: number[]): number {
  let max = 0
  let left = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1)
      max = Math.max(max, i - left + 1)
    else
      left = i + 1
  }
  return max
}
// @lc code=end
