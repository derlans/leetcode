// @ts-ignore
function typeOf(v: any) {
  return Object.prototype.toString.call(v).slice(8, -1).toLocaleLowerCase()
}
console.log(typeOf([]))
console.log(typeOf({}))
console.log(typeOf(Object.create(Array.prototype)))
console.log(typeOf(() => {}))
console.log(typeOf(new Date()))
console.log(typeOf(/\d+/))
console.log(typeOf(Symbol('foo')))
console.log(typeOf(null))
console.log(typeOf(undefined))
console.log(typeOf(NaN))
console.log(typeOf(Infinity))
console.log(typeOf(true))
console.log(typeOf(false))
console.log(typeOf('foo'))
console.log(typeOf(123))
console.log(typeOf(Number(123)))
console.log(typeOf(new Proxy({}, {})))
