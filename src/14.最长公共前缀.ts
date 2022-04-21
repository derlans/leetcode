/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0)
    return ''
  let prefix = strs[0]
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1)
      if (prefix === '')
        return ''
    }
  }
  return prefix
}
// @lc code=end
