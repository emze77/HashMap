import Entry from "./Entry.js";
import HashMap from "./HashMap.js";

let map = new HashMap()

map.loadFactor = 2
map.capacity = 5
map.buckets[0] = new Entry("foo", 1)
map.buckets[1] = new Entry("bar", 2)
map.buckets[2] = new Entry("caf", 3)
map.buckets[3] = new Entry("delz", 4)
map.buckets[4] = new Entry("ciork", 5)
map.set("buzz", 5)