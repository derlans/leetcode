{ function typeOf(v: any) {
  return Object.prototype.toString.call(v).slice(8, -1).toLocaleLowerCase()
}

function deepClone(obj: any, hash = new Map()) {
  let result: any
  if (hash.has(obj))
    return hash.get(obj)
  if (typeOf(obj) === 'array') {
    result = []
    hash.set(obj, result)
    for (let i = 0; i < obj.length; i++)
      result.push(deepClone(obj[i], hash))
  }
  else if (typeOf(obj) === 'object') {
    result = {}
    hash.set(obj, result)
    for (const key in obj)
      result[key] = deepClone(obj[key], hash)
  }
  else if (typeOf(obj) === 'date') {
    result = new Date(obj.getTime())
  }
  else if (typeOf(obj) === 'regexp') {
    result = new RegExp(obj.source, obj.flags)
  }
  else if (typeOf(obj) === 'set') {
    result = new Set()
    hash.set(obj, result)
    obj.forEach((v: any) => result.add(deepClone(v, hash)))
  }
  else if (typeOf(obj) === 'map') {
    result = new Map<any, any>()
    hash.set(obj, result)
    obj.forEach((v: any, k: any) => {
      result.set(k, deepClone(v, hash))
    })
  }
  else if (typeOf(obj) === 'symbol') {
    result = obj
  }
  else if (typeOf(obj) === 'function') {
    result = obj
  }
  else {
    result = obj
  }
  hash.set(obj, result)
  return result
}

const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
    f: { g: 5 },
  },
  h: [1, 2, 3],
  i: new Date(),
  j: /\d+/,
  k: new Set([1, 2, 3]),
  l: new Map([['a', 1], ['b', 2]]),
  m: Symbol('a'),
  n() { },
}
console.log(deepClone(obj))
{
  const b: any = { a: 1 }
  const a: any = { b }
  b.a = a
  console.log(a)
  console.log(deepClone(a))
}
}
