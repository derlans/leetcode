{
  function asyncLog(color: string, time: number) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(color)
        resolve(undefined)
      }, time)
    })
  }
  const next = async() => {
    await asyncLog('red', 100)
    await asyncLog('yellow', 1000)
    await asyncLog('green', 5000)
    next()
  }
  // next()
  const fn = (v: any) => console.log(v)
  // @ts-ignore
  for (let i = 0; i < 3; i++)
    setTimeout(fn.bind(null, i), i * 1000)
}
