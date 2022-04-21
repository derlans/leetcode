/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
function reverseWords(s: string): string {
  return s.trim().split(' ').reverse().filter(Boolean).join(' ')
}
// @lc code=end
