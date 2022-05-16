/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  if (!root)
    return []
  const res: number[][] = []
  const queue: TreeNode[] = [root]
  while (queue.length) {
    const level: number[] = []
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      if (node) {
        level.push(node.val)
        if (node.left)
          queue.push(node.left)
        if (node.right)
          queue.push(node.right)
      }
    }
    res.push(level)
  }
  return res
}
// @lc code=end
