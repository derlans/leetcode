{
  // @ts-ignore
  Function.prototype.MCall = function(_this: any, ...args: any[]) {
    const fn = Symbol('fn')
    _this.fn = this
    const result = _this.fn(...args)
    delete _this.fn
    return result
  }
  // @ts-ignore
  Function.prototype.MBind = function(_this: any, ...args1: any[]) {
    const fn = Symbol('fn')
    _this.fn = this
    return function(...args2: any[]) {
      const result = _this.fn(...[...args1, ...args2])
      delete _this.fn
      return result
    }
  }
  // @ts-ignore
  Function.prototype.MApply = function(_this: any, args: any[]) {
    const fn = Symbol('fn')
    _this.fn = this
    const result = _this.fn(...args)
    delete _this.fn
    return result
  }
  function logPerson(...args: any[]) {
    // @ts-ignore
    console.log(this.name)
    // @ts-ignore
    console.log(this.age)
    console.log(args)
  }
  const person = {
    name: '张三',
    age: 18,
    log: logPerson,
  }
  const person2 = {
    name: '李四',
    age: 20,
  }
  person.log(1, 2, 3)
  person.log.call(person2, 1, 2, 3)
  // @ts-ignore
  person.log.MCall(person2, 1, 2, 3)
  person.log.bind(person2, 1, 2)(3)
  // @ts-ignore
  person.log.MBind(person2, 1)(2, 3)
  person.log.apply(person2, [1, 2, 3])
  // @ts-ignore
  person.log.MApply(person2, [1, 2, 3])
}
