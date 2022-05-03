{
  class Observer {
    constructor(public name: string) {
      this.name = name
    }

    update(message: string) {
      console.log(`${this.name}:${message}`)
    }
  }
  class Subject {
    private observers: Observer[] = []
    addObserver(...observers: Observer[]) {
      this.observers.push(...observers)
    }

    removeObserver(observer: Observer) {
      const index = this.observers.indexOf(observer)
      this.observers.splice(index, 1)
    }

    notifyObservers(message: string) {
      this.observers.forEach(observer => observer.update(message))
    }
  }
  const observer1 = new Observer('张三')
  const observer2 = new Observer('李四')
  const subject = new Subject()
  subject.addObserver(observer1)
  subject.addObserver(observer2)
  subject.notifyObservers('消息')
}
