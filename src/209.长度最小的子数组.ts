/*
 * @lc app=leetcode.cn id=209 lang=typescript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  let min = Infinity
  let left = 0
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (sum < target) {
      continue
    }
    else {
      while (sum - nums[left] >= target) {
        sum -= nums[left]
        left++
      }
      min = Math.min(min, i - left + 1)
    }
  }
  return min === Infinity ? 0 : min
}
// @lc code=end
