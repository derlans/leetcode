/*
 * @lc app=leetcode.cn id=821 lang=typescript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
function shortestToChar(s: string, c: string): number[] {
  const res: number[] = []
  const cIndex: number[] = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c)
      cIndex.push(i)
  }
  for (let i = 0; i < s.length; i++) {
    let min = s.length
    for (let j = 0; j < cIndex.length; j++) {
      if (Math.abs(cIndex[j] - i) < min)
        min = Math.abs(cIndex[j] - i)
    }
    res.push(min)
  }
  return res
}
// @lc code=end
