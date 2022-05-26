function isStraight(nums: number[]): boolean {
  let count = 0
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) {
      count++
      continue
    }
    if (nums[i] === nums[i + 1])
      return false
    count = count - nums[i + 1] + nums[i] + 1
  }
  return count >= 0
}
console.log(isStraight([0, 0, 1, 2, 5]))
console.log(isStraight([0, 0, 1, 2, 6]))
