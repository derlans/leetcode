function unique_es6(arr: any[]) {
  return Array.from(new Set(arr))
}
function unique_es5(arr: any[]) {
  const res: any[] = []
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i]))
      res.push(arr[i])
  }
  return res
}
function unique_Map(arr: any[]) {
  const res: any[] = []
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (!map.get(arr[i]))
      res.push(arr[i])
    map.set(arr[i], true)
  }
  return res
}

const a = {}
const b = [a]
console.log(unique_es6([1, 1, undefined, undefined, a, a, b, b]))
console.log(unique_es5([1, 1, undefined, undefined, a, a, b, b]))
console.log(unique_Map([1, 1, undefined, undefined, a, a, b, b]))
