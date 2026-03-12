import HashMap from "./HashMap.js";

let map = new HashMap()

const originalCapacity = map.capacity

const firstKeyAmountToGrow = originalCapacity * map.loadFactor
for (let i = 1; i <= firstKeyAmountToGrow; i++) {
  map.set(toString(i), i)
}
