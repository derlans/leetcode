/*
 * @lc app=leetcode.cn id=74 lang=typescript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  if (matrix.length === 0)
    return false
  let row = 0
  let col = matrix[0].length - 1
  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] === target)
      return true
    if (matrix[row][col] > target)
      col--
    else row++
  }
  return false
}
// @lc code=end
searchMatrix([[1]], 2)
