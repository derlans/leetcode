/*
 * @lc app=leetcode.cn id=953 lang=typescript
 *
 * [953] 验证外星语词典
 */

// @lc code=start
function isAlienSorted(words: string[], order: string): boolean {
  const map = new Map()
  for (let i = 0; i < order.length; i++)
    map.set(order[i], i)

  map.set(undefined, -1)
  for (let i = 0; i <= words.length - 2; i++) {
    const a = words[i]
    const b = words[i + 1]
    for (let j = 0; (j <= a.length && j <= b.length);j++) {
      if (a[j] === b[j])
        continue
      if (map.get(a[j]) > map.get(b[j]))
        return false
      else
        break
    }
  }
  return true
}
// @lc code=end
console.log(isAlienSorted(['hello', 'leetcode'], 'hlabcdefgijkmnopqrstuvwxyz'))
