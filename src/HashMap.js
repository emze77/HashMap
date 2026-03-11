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
    let hash = this.hash(key)
    const firstHash = hash

    while (true) {
      if (this.buckets[hash] === undefined) {
        this.buckets[hash] = new Entry(key, value)
        break
      } else if (this.buckets[hash].key === key) {
        this.buckets[hash].value = value
        break
      } else {
        // console.log(`Cannot store ${key}: bucket ${hash} is already taken by another key! (${this.buckets[hash].key})`)
        hash = this.#handleCollision(hash)
        if (hash === firstHash) {
          throw new Error(`Method to handle collision is not able to find empty bucket.`)
          // console.log(`Method to handle collision is not able to find empty bucket.`)
        }
        continue
      }
    }
  }

  get(key) {
    let hash = this.hash(key)

    while (true) {
      if (this.buckets[hash] instanceof Entry &&
        this.buckets[hash].key === key) {
        return this.buckets[hash].value

      } else if (this.buckets[hash] instanceof Entry &&
        this.buckets[hash].key !== key ||
        this.buckets[hash] === "removed"
      ) {
        hash = this.#handleCollision(hash)
        continue

      } else {
        return null
      }
    }
  }

  remove(key) {
    let hash = this.hash(key)

    while (true) {
      if (this.buckets[hash] instanceof Entry &&
        this.buckets[hash].key === key) {
        this.buckets[hash] = "removed"
        return true
      } else if (this.buckets[hash] instanceof Entry &&
        this.buckets[hash].key !== key) {
        hash = this.#handleCollision(hash)
        continue
      } else {
        return false
      }
    }

  }

  /*
  How to Handle Collision:
  Set: check if (3 / PRIME) away is 'undefined' / 'same key' / 'deleted'!
    if: bucket is original bucket: break --> not solvable
    true: new hash is free bucket
    false: continue loop
  */

  #handleCollision(hash) {
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
    for (let entry of this.buckets) {
      if (entry?.key) keys.push(entry.key)
    }
    return keys
  }


}