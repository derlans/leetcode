/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = (left + right) >> 1
    if (nums[mid] === target)
      return mid
    if (nums[mid] > target)
      right = mid - 1
    else
      left = mid + 1
  }
  return left
}
// @lc code=end
// 二分模板 要记住
