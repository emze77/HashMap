import Entry from "./Entry.js"

export default class HashMap {
  loadFactor = 0.75
  capacity = 16
  buckets = []

  hash(key) {
    if (typeof key !== "string") {
      throw new Error("given parameter of HashMap.hash is not type of string!")
    }

    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i)
      hashCode = hashCode % this.capacity
    }

    return hashCode
  }

  set(key, value) {
    const hash = this.hash(key)
    const entry = new Entry(key, value)
    this.buckets[hash] = entry
  }

}