/*
 * @lc app=leetcode.cn id=398 lang=typescript
 *
 * [398] 随机数索引
 */

// @lc code=start
class Solution {
  public nums: number[]
  constructor(nums: number[]) {
    this.nums = nums
  }

  pick(target: number): number {
    let count = 0
    let res = -1
    for (let i = 0; i < this.nums.length; i++) {
      if (this.nums[i] === target) {
        count++
        if (Math.random() < 1 / count)
          res = i
      }
    }
    return res
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
// @lc code=end
