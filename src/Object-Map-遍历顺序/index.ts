const symbol1 = Symbol('1')
// 结论就是如果字符串可以转化为数字会按照数字排序
const obj: any = {
  'city': 'Beijing',
  '12': 12,
  '7': 7,
  '0': 0,
  '01': '01',
  '-': '-',
  '-2': -2,
  'age': 15,
  '-3.5': -3.5,
  '7.7': 7.7,
  '_': '___',
  'online': true,
  '3': 3,
  '23': '23',
  '44': 44,
}
obj[1] = '1'
obj[symbol1] = symbol1
for (const i in obj)
  console.log(i)
console.log(obj)
console.log(Object.keys(obj))
console.log(Object.entries(obj))
console.log(Object.getOwnPropertyDescriptors(obj))
console.log(Object.getOwnPropertyNames(obj))
console.log(Object.getOwnPropertySymbols(obj))
const map = new Map()
map.set(0, 0)
map.set(1, 1)
map.set('0', '0')
// map.forEach((v, k) => {
//   console.log(k)
// })
