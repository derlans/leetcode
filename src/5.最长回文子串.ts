/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  const len = s.length
  if (len < 2)
    return s
  const dp: boolean[][] = Array.from({ length: len }, () => Array.from({ length: len }, () => false))
  for (let i = 0; i < len; i++)
    dp[i][i] = true
  let start = 0
  let end = 0
  let max = 1
  for (let maxL = 2; maxL <= len; maxL++) {
    if (maxL - max > 2)
      return s.slice(start, end + 1)
    for (let i = 0; i < len - maxL + 1; i++) {
      const j = i + maxL - 1
      if (maxL === 2 && s[i] === s[j]) {
        dp[i][j] = true
        start = i
        end = j
        max = maxL
      }
      else if (dp[i + 1][j - 1] && s[i] === s[j]) {
        dp[i][j] = true
        start = i
        end = j
        max = maxL
      }
    }
  }
  return s.slice(start, end + 1)
}
// @lc code=end
const exapmle = longestPalindrome('ac')
