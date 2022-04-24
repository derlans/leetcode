function promiseAll(promises: Promise<any>[]) {
  return new Promise((resolve, reject) => {
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
function getPromise(value: any, time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value)
    }, time)
  })
}
const promises = [getPromise(1, 1000), getPromise(2, 2000), getPromise(3, 3000)]
console.time('promiseAll')
promiseAll(promises).then((results) => {
  console.log(results)
  console.timeEnd('promiseAll')
})

function promiseRace(promises: Promise<any>[]) {
  return new Promise((resolve, reject) => {
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
console.time('promiseRace')
promiseRace(promises).then((results) => {
  console.log(results)
  console.timeEnd('promiseRace')
})
