/*
 * @lc app=leetcode.cn id=388 lang=typescript
 *
 * [388] 文件的最长绝对路径
 */

// @lc code=start
function lengthLongestPath(input: string): number {
  const list = input.split('\n')
  let max = 0
  const len: number[] = []
  for (const i of list) {
    if (i.includes('.')) {
      const temp = i.split('\t')
      max = Math.max(max, len.reduce((pre, cur) => pre + cur, 0) + len.length + temp[temp.length - 1].length)
    }
    else {
      const temp = i.split('\t')
      if (len.length < temp.length) {
        len.push(temp[temp.length - 1].length)
      }
      else {
        while (len.length >= temp.length)
          len.pop()
        len.push(temp[temp.length - 1].length)
      }
    }
  }
  return max
}
// @lc code=end
// 题目描述不清晰 跑路
lengthLongestPath('dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext')
