type states = 'pending' | 'fulfilled' | 'rejected'
class MyPromise<T> {
  public state: states = 'pending'
  public result: any = undefined
  private onFulfilleds: Function[] = []
  private onRejecteds: Function[] = []
  constructor(fn: (resolve: Function, reject: Function) => void) {
    const resolve = (value: any) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.result = value
        this.onFulfilleds.forEach((onFulfilled) => {
          onFulfilled(value as T)
        })
      }
    }
    const reject = (reason: any) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.result = reason
        this.onRejecteds.forEach((onRejected) => {
          onRejected(reason)
        })
      }
    }
    queueMicrotask(() => {
      try {
        fn(resolve, reject)
      }
      catch (e) {
        reject(e)
      }
    })
  }

  public then(onFulfilled?: (v: any) => any, onRejected?: (v: any) => any) {
    return new MyPromise((resolve, reject) => {
      const handleResolve = (value: any) => {
        try {
          if (typeof onFulfilled === 'function') {
            const result = onFulfilled(value)
            if (result instanceof MyPromise)
              return result
            else
              resolve(result)
          }
          else {
            resolve(value)
          }
        }
        catch (e) {
          reject(e)
        }
      }
      const handleReject = (reason: any) => {
        try {
          if (typeof onRejected === 'function') {
            const result = onRejected(reason)
            if (result instanceof MyPromise)
              return result
            else
              resolve(result)
          }
          else {
            reject(reason)
          }
        }
        catch (e) {
          reject(e)
        }
      }
      if (this.state === 'pending') {
        this.onFulfilleds.push(handleResolve)
        this.onRejecteds.push(handleReject)
      }
      else if (this.state === 'fulfilled') {
        handleResolve(this.result)
      }
      else if (this.state === 'rejected') {
        handleReject(this.result)
      }
    })
  }

  public catch(onRejected?: (v: any) => any) {
    return this.then(undefined, onRejected)
  }

  public static resolve(value: any) {
    return new MyPromise((resolve) => {
      resolve(value)
    })
  }

  public static reject(reason: any) {
    return new MyPromise((_, reject) => {
      reject(reason)
    })
  }

  public static all(promises: MyPromise<any>[]) {
    return new MyPromise((resolve, reject) => {
      const results: any[] = new Array(promises.length)
      let count = 0
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (value: any) => {
            results[i] = value
            count++
            if (count === promises.length)
              resolve(results)
          },
          (reason: any) => {
            reject(reason)
          },
        )
      }
    })
  }

  public static race(promises: MyPromise<any>[]) {
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        promises[i].then(
          (value: any) => {
            resolve(value)
          },
          (reason: any) => {
            reject(reason)
          },
        )
      }
    })
  }
}
const d = new MyPromise((resolve, reject) => {
  resolve(1)
  throw new Error('error')
})
d.then().then().catch((reason) => {
  console.log('catch 错误')
  console.log(reason)
  return reason
})
d.then((value) => {
  console.log('then 成功')
  console.log(value)
  return value
})
function getPromise(value: any, time: number) {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(value)
    }, time)
  })
}
const promises = [getPromise(1, 1000), getPromise(2, 2000), getPromise(3, 3000)]
console.time('promiseAll')
MyPromise.all(promises).then((results) => {
  console.log(results)
  console.timeEnd('promiseAll')
})

console.time('promiseRace')
MyPromise.race(promises).then((results) => {
  console.log(results)
  console.timeEnd('promiseRace')
})

{
  const a = { a: undefined, b: null }
  const { a: _a = 1, b = 2 } = a
}
