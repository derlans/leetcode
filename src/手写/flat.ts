function flat(arr: Array<any>): Array<any> {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
  }, [])
}

console.log(flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]))
{
  const a: any[] = [1, 2, 3]
  a[0] = a
  console.log(a)
  console.log(a.flat(10))
  console.log(flat(a))
}
