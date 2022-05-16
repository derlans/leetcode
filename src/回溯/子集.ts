{
  function subsets(nums: number[]): number[][] {
    const t: number[] = []
    const ans: number[][] = []
    const dfs = (cur: number, nums: number[]) => {
      if (cur === nums.length) {
        ans.push(t.slice())
        return
      }
      t.push(nums[cur])
      dfs(cur + 1, nums)
      t.pop()
      dfs(cur + 1, nums)
    }
    dfs(0, nums)
    return ans
  }
  console.log(subsets([1, 2, 3]))
}
