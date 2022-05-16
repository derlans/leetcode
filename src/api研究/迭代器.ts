{ const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,

      next() { // (2)
        // 注意：我们可以在 async next 内部使用 "await"
        if (this.current <= this.last)
          return { done: false, value: this.current++ }
        else
          return { done: true }
      },
    }
  },
  [Symbol.asyncIterator]() { // (1)
    return {
      current: this.from,
      last: this.to,

      async next() { // (2)
        // 注意：我们可以在 async next 内部使用 "await"
        await new Promise(resolve => setTimeout(resolve, 1000)) // (3)

        if (this.current <= this.last)
          return { done: false, value: this.current++ }
        else
          return { done: true }
      },
    }
  },
};

(async() => {
  for await (const value of range) { // (4)
    console.log(value) // 1,2,3,4,5
  }
})()
}
{
  const range = {
    from: 1,
    to: 5,

    // 这一行等价于 [Symbol.asyncIterator]: async function*() {
    async *[Symbol.asyncIterator]() {
      for (let value = this.from; value <= this.to; value++) {
        // 在 value 之间暂停一会儿，等待一些东西
        await new Promise(resolve => setTimeout(resolve, 1000))

        yield value
      }
    },
  };

  (async() => {
    for await (const value of range)
      console.log(value, 'yield') //  // 1，然后 2，然后 3，然后 4，然后 5
  })()
}
