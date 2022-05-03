/*
 * @lc app=leetcode.cn id=343 lang=typescript
 *
 * [343] 整数拆分
 */

// @lc code=start
function integerBreak(n: number): number {
  if (n === 2)
    return 1
  if (n === 3)
    return 2
  let res = 1
  while (n > 4) {
    res *= 3
    n -= 3
  }
  return res * n
}
// @lc code=end
