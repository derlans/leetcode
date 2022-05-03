{
  let a: object | null = { b: 1 }
  const b = { a: 2 }
  const c = new WeakMap()
  c.set(a, 1)
  c.set(b, 2)
  a = null
  console.log(c.get(b))
  console.log(c.get(a))
}
