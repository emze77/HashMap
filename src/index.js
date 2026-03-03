import HashMap from "./HashMap.js";

const map = new HashMap
const hash1 = map.hash("Rama")
console.log(`Rama Hash: ${hash1}`)
const hash2 = map.hash("Sita")
console.log(`Sita Hash: ${hash2}`)
map.set("Rama", 1)
console.log(map.buckets[hash1])
map.set("Sita", 2)
console.log(map.buckets[map.hash("Rama")])