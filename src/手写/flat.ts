function flat(arr: Array<any>): Array<any> {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flat(val) : val), [])
}

console.log(flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]))
