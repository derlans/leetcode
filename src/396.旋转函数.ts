/*
 * @lc app=leetcode.cn id=396 lang=typescript
 *
 * [396] 旋转函数
 */

// @lc code=start
function maxRotateFunction(nums: number[]): number {
  let sum = 0
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    max += i * nums[i]
  }
  let cur = max
  for (let i = nums.length - 1; i >= 0; i--) {
    cur = cur + sum - nums.length * nums[i]
    max = Math.max(max, cur)
  }
  return max
}
// @lc code=end
