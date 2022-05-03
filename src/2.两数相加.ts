/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}
// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let flag = 0
  const res = new ListNode()
  let cur = res
  while (l1 || l2 || flag) {
    const val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + flag
    cur.next = new ListNode(val % 10)
    cur = cur.next
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
    flag = val >= 10 ? 1 : 0
  }
  return res.next
}
// @lc code=end
