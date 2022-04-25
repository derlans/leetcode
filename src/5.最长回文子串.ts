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
  const dp = new Array(len).fill(0).map(() => new Array(len).fill(false))
  for (let i = 0; i < len; i++)
    dp[i][i] = true
  let start = 0; let end = 0
  for (let l = 2; l <= len; l++) {
    for (let i = 0; i < len - l + 1; i++) {
      if ((l === 2 || dp[i + 1][i + l - 2]) && s[i] === s[i + l - 1]) {
        dp[i][i + l - 1] = true
        start = i
        end = i + l - 1
      }
    }
  }
  return s.slice(start, end + 1)
}
// @lc code=end
const exapmle = longestPalindrome('aacabdkacaa')
