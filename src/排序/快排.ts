function quikSort(arr: number[], left = 0, right = arr.length - 1) {
  if (left >= right)
    return
  const i = left
  const j = right
  const pivot = arr[left]
  while (left < right) {
    if (arr[left] < pivot) {
      left++
      continue
    }
    if (arr[right] >= pivot) {
      right--
      continue
    }
    [arr[left], arr[right]] = [arr[right], arr[left]]
  }
  arr[left] = pivot
  quikSort(arr, i, left - 1)
  quikSort(arr, left + 1, j)
}
const arr = [100, 100, -10, 1, 6, 3, 3, 3, 2, 2, 4, 5, 7, 8, 3, 4, 9, -100, -10, 9, 10]
quikSort(arr)
console.log(arr)
