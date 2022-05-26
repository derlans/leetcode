/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root)
    return []
  const res: number[][] = []
  const queue: TreeNode[] = [root]
  let level = 0
  while (queue.length) {
    const size = queue.length
    const arr: number[] = []
    for (let i = 0; i < size; i++) {
      const node = queue.shift()!
      if (level % 2 === 0)
        arr.push(node.val)
      else
        arr.unshift(node.val)
      if (node.left)
        queue.push(node.left)
      if (node.right)
        queue.push(node.right)
    }
    res.push(arr)
    level++
  }
  return res
}
// @lc code=end
