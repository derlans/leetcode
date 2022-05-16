{
  function choose(nums: number[], count: number): number[][] {
    if (count === 0)
      return [[]]
    if (count === 1)
      return nums.map(num => [num])
    const result: number[][] = []
    const length = nums.length
    for (let i = 0; i < length; i++) {
      const num = nums[0]
      const rest = nums.filter(n => n !== num)
      const restResult = choose(rest, count - 1)
      for (const r of restResult)
        result.push([num, ...r])
      nums = rest
    }
    return result
  }
  console.log(choose([1, 2, 3, 4, 5], 0))
}
