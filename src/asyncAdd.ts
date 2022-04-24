function asyncAdd(a: number, b: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b)
    }, 1000)
  })
}
async function add(...args: number[]): Promise<number> {
  if (args.length === 0)
    return 0
  if (args.length === 1)
    return args[0]
  if (args.length === 2)
    return asyncAdd(args[0], args[1])
  const res: Promise<number>[] = []
  let i = 0
  while (i < args.length) {
    res.push(asyncAdd(args[i], args[i + 1] ?? 0))
    i += 2
  }
  return add(...await Promise.all(res))
}
console.time()
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).then((res) => {
  console.log(res)
  console.timeEnd()
})
