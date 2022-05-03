/*
 * @lc app=leetcode.cn id=400 lang=typescript
 *
 * [400] 第 N 位数字
 */

// @lc code=start
function findNthDigit(n: number): number {
  let base = 1
  let count = 9
  let start = 1
  while (n > base * count) {
    n -= base * count
    base *= 10
    count *= 10
    start *= 10
  }
  start += (n - 1) / base
  return parseInt(start.toString()[(n - 1) % base])
}
// @lc code=end
