/*
 * @lc app=leetcode.cn id=498 lang=typescript
 *
 * [498] 对角线遍历
 */

// @lc code=start
function findDiagonalOrder(mat: number[][]): number[] {
  const res: number[] = []
  const m = mat.length
  if (m === 0)
    return res
  const n = mat[0].length
  let i = 0; let j = 0
  while (i < m && j < n) {
    res.push(mat[i][j])
    if ((j + i) % 2 === 0) {
      if (j === n - 1) {
        i++
        continue
      }
      if (i === 0) {
        j++
        continue
      }
      j++
      i--
    }
    else {
      if (i === m - 1) {
        j++
        continue
      }
      if (j === 0) {
        i++
        continue
      }
      j--
      i++
    }
  }
  return res
}
// @lc code=end
const example = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
findDiagonalOrder(example)
// 无穷无尽的if else 思路就是模拟走动 按照方向分类讨论 注意边界和判断的优先级
