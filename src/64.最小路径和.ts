/*
 * @lc app=leetcode.cn id=64 lang=typescript
 *
 * [64] 最小路径和
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
  if (grid.length === 0 || grid[0].length === 0)
    return 0
  const m = grid.length
  const n = grid[0].length
  const dp: number[][] = new Array(m).fill(0).map(_ => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0)
        dp[i][j] = grid[i][j]
      else if (i === 0)
        dp[i][j] = dp[i][j - 1] + grid[i][j]
      else if (j === 0)
        dp[i][j] = dp[i - 1][j] + grid[i][j]
      else
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }
  return dp[m - 1][n - 1]
}
// @lc code=end
minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]])
