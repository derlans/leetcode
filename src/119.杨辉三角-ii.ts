/*
 * @lc app=leetcode.cn id=119 lang=typescript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
function getRow(rowIndex: number): number[] {
  const res: number[] = []
  function C(a: number, b: number): number {
    let r = 1
    if (b === 0)
      return 1
    if (b === 1)
      return a
    for (let i = 0; i < b; i++)
      r = r * (a - i) / (i + 1)
    return r
  }
  for (let i = 0; i <= rowIndex; i++)
    res.push(C(rowIndex, i))
  return res
}
// @lc code=end
