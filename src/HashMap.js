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
    if (this.#capacityCheck()) {
      this.#growCapacity()
      this.#recalculateCurrentKeys()
    }

    this.#setInCurrentTable(key, value)
  }

  #setInCurrentTable(key, value) {
    let hash = this.hash(key)

    for (let i = 0; i <= this.buckets.length; i++) {
      if (this.buckets[hash] === undefined) {
        this.buckets[hash] = new Entry(key, value)
        return
      }

      if (this.buckets[hash]?.key === key) {
        this.buckets[hash].value = value
        return
      }

      hash = this.#stepProbeBy3(hash)
    }

    throw new Error(`Couldn't find empty bucket for key`)
  }

  #capacityCheck() {
    const load = this.buckets.length / this.capacity
    return load >= this.loadFactor
  }

  #growCapacity() {
    this.capacity = this.capacity * 2
  }

  // get all entries and set them within new capacity
  #recalculateCurrentKeys() {
    const entries = this.#entries()
    this.clear()
    for (let entry of entries) {
      this.#setInCurrentTable(entry.key, entry.value)
    }
  }

  get(key) {
    let hash = this.hash(key)

    for (let i = 0; i <= this.buckets.length; i++) {
      if (this.buckets[hash] instanceof Entry &&
        this.buckets[hash].key === key
      ) return this.buckets[hash].value

      if (this.buckets[hash] instanceof Entry &&
        this.buckets[hash].key !== key ||
        this.buckets[hash] === "removed"
      ) hash = this.#stepProbeBy3(hash)
    }

    return null
  }

  remove(key) {
    let hash = this.hash(key)
    let counter = 0

    do {
      if (this.buckets[hash] instanceof Entry &&
        this.buckets[hash].key === key) {
        this.buckets[hash] = "removed"
        return true
      }
      hash = this.#stepProbeBy3(hash)
      counter++
    } while (
      this.buckets[hash] instanceof Entry ||
      this.buckets[hash] === "removed" &&
      counter <= this.buckets.length
    )

    return false
  }

  // collision handling
  #stepProbeBy3(hash) {
    const COLLISION_JUMPER = 3
    const nextHash = hash + COLLISION_JUMPER
    if (nextHash >= this.capacity) {
      nextHash = nextHash - this.capacity
    }

    return nextHash
  }

  clear() {
    this.buckets = []
  }

  keys() {
    const keys = []
    for (let item of this.buckets) {
      if (item instanceof Entry) keys.push(item.key)
    }
    return keys
  }

  #entries() {
    const entries = []
    for (let item of this.buckets) {
      if (item instanceof Entry) entries.push(item)
    }
    return entries
  }


}