/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  let max = 0
  const set = new Set()
  let left = 0
  for (let i = 0; i < s.length; i++) {
    const v = s[i]
    if (!set.has(v)) {
      set.add(v)
    }
    else {
      while (s[left] !== v && left < i) {
        set.delete(s[left])
        left++
      }
      left++
    }
    max = Math.max(max, set.size)
  }
  return max
}
// @lc code=end
console.log(lengthOfLongestSubstring('aabaab!bb'))
