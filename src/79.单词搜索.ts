/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
  if (board.length === 0)
    return false

  const m = board.length
  const n = board[0].length
  const map = new Map()
  const actions = [[0, -1], [1, 0], [0, 1], [-1, 0]]
  function dfs(x: number, y: number, index: number) {
    if (index === word.length)
      return true
    const target = word[index]
    let k = -1
    while (++k !== 4) {
      const action = actions[k]
      const nextX = x + action![0]
      const nextY = y + action![1]
      if (nextX === -1 || nextX === m || nextY === -1 || nextY === n)
        continue
      if (board[nextX][nextY] !== target)
        continue
      if (map.get(`${nextX}-${nextY}`))
        continue

      map.set(`${nextX}-${nextY}`, true)
      if (dfs(nextX, nextY, index + 1))
        return true

      map.set(`${nextX}-${nextY}`, false)
    }
    return false
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        map.set(`${i}-${j}`, true)
        if (dfs(i, j, 1))
          return true
        map.set(`${i}-${j}`, false)
      }
    }
  }
  return false
}
// @lc code=end
console.log(exist([['a', 'b'], ['c', 'd']], 'abcd'))
