function createPromise(time: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolve')
    }, time)
  })
}

async function loop() {
  for (let i = 0; i < 5; i++)
    console.log(await createPromise(1000))
}
loop()
