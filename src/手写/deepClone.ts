// @ts-ignore
function typeOf(v: any) {
  return Object.prototype.toString.call(v).slice(8, -1).toLocaleLowerCase()
}

function deepClone(obj: any) {
  let result: any
  if (typeOf(obj) === 'array') {
    result = []
    for (let i = 0; i < obj.length; i++)
      result.push(deepClone(obj[i]))
  }
  else if (typeOf(obj) === 'object') {
    result = {}
    for (const key in obj)
      result[key] = deepClone(obj[key])
  }
  else if (typeOf(obj) === 'date') {
    result = new Date(obj.getTime())
  }
  else if (typeOf(obj) === 'regexp') {
    result = new RegExp(obj.source, obj.flags)
  }
  else if (typeOf(obj) === 'set') {
    result = new Set(obj)
  }
  else if (typeOf(obj) === 'map') {
    result = new Map(obj)
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
