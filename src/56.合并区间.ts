/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0)
    return []
  intervals.sort((a, b) => a[0] - b[0])
  const res: number[][] = []
  let start = intervals[0][0]
  let end = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= end) {
      end = Math.max(end, intervals[i][1])
    }
    else {
      res.push([start, end])
      start = intervals[i][0]
      end = intervals[i][1]
    }
  }
  res.push([start, end])
  return res
}
// @lc code=end
