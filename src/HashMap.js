import Entry from "./Entry.js"

export default class HashMap {
  loadFactor = 0.75
  capacity = 16
  buckets = new Array(this.capacity)
  REMOVED = Symbol("removed")

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

      if (hash < 0 || hash >= this.capacity) {
        console.log(this.buckets.length)
        throw new Error("Trying to access index out of bounds");
      }

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
    const entries = this.entries()
    this.buckets = []
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
        this.buckets[hash] === this.REMOVED
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
        this.buckets[hash] = this.REMOVED
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
    let nextHash = hash + COLLISION_JUMPER
    if (nextHash >= this.capacity) {
      nextHash = nextHash - this.capacity
    }

    return nextHash
  }

  clear() {
    this.buckets = []
    this.capacity = 16
    this.loadFactor = 0.75
  }

  // resetCapacity() {
  //   this.capacity = 16
  // }

  has(key) {
    return !!this.get(key)
  }

  keys() {
    const keys = []
    for (let item of this.buckets) {
      if (item instanceof Entry) keys.push(item.key)
    }
    return keys
  }

  length() {
    let entries = 0
    for (let entry of this.buckets) {
      if (entry instanceof Entry) entries++
    }
    return entries
  }

  values() {
    const values = []
    for (let item of this.buckets) {
      if (item instanceof Entry) values.push(item.value)
    }
    return values
  }

  entries() {
    const entries = []
    for (let item of this.buckets) {
      if (item instanceof Entry) entries.push(item)
    }
    return entries
  }


}