import HashMap from "./HashMap.js";

let map = new HashMap()

const originalCapacity = map.capacity

const firstKeyAmountToGrow = map.capacity * map.loadFactor
for (let i = 0; i <= firstKeyAmountToGrow; i++) {
  map.set(`${i}`, i)
}
