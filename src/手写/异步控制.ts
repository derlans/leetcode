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
  next()
}
