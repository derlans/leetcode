/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let left = 0; let right = nums.length - 1
  let mid = (left + right) >> 1
  while (left < right) {
    mid = (left + right) >> 1
    if (nums[mid] < target)
      left = mid + 1
    else
      right = mid
  }
  if (nums[left] !== target)
    return [-1, -1]

  right = left
  while (nums[left - 1] === target)
    left--

  while (nums[right + 1] === target)
    right++

  return [left, right]
}
// @lc code=end
searchRange([1, 4], 4)
