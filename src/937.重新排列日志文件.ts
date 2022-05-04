/*
 * @lc app=leetcode.cn id=937 lang=typescript
 *
 * [937] 重新排列日志文件
 */

// @lc code=start
function reorderLogFiles(logs: string[]): string[] {
  return logs.sort((a, b) => {
    const [aName, aRest] = a.split(' ')
    const [bName, bRest] = b.split(' ')
    if (aRest.match(/^[0-9]/))
      return 1
    if (bRest.match(/^[0-9]/))
      return -1
    if (a.substring(aName.length) === b.substring(bName.length))
      return aName < bName ? -1 : 1
    return a.substring(aName.length) < b.substring(bName.length) ? -1 : 1
  })
}
// @lc code=end
