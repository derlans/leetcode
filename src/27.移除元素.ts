/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  let left = 0; let right = nums.length - 1
  while (left <= right) {
    if (nums[right] === val) {
      right--
      continue
    }
    if (nums[left] === val) {
      nums[left] = nums[right]
      nums[right] = val
      left++
      right--
    }
    else {
      left++
    }
  }
  return right + 1
}
// @lc code=end
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
