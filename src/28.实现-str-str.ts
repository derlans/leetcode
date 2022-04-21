/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  if (needle.length === 0)
    return 0

  if (haystack.length < needle.length)
    return -1

  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    if (haystack[i] === needle[0]) {
      let j = 1
      while (j < needle.length) {
        if (haystack[i + j] === needle[j]) {
          j++
          continue
        }
        else {
          break
        }
      }
      if (j === needle.length)
        return i
    }
  }
  return -1
}
// @lc code=end
const strStrExapmle = strStr('mississippi', 'issip')
