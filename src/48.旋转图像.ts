/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const l = matrix.length
  // 斜线对折
  for (let i = 0; i < l; i++) {
    for (let j = i; j < l; j++)
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
  }
  // 水平翻转
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l / 2; j++)
      [matrix[i][j], matrix[i][l - j - 1]] = [matrix[i][l - j - 1], matrix[i][j]]
  }
}
// @lc code=end
rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
