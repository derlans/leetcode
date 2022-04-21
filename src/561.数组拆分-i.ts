/*
 * @lc app=leetcode.cn id=561 lang=typescript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
function arrayPairSum(nums: number[]): number {
  return nums.sort((a, b) => a - b).reduce((acc, cur, i) => {
    if (i % 2 === 0)
      return acc + cur
    return acc
  }, 0)
}
// @lc code=end
