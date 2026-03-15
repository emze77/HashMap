import HashMap from "./HashMap.js";

let map = new HashMap()

map.set('apple', 'red')
map.set('banana', 'yellow')
map.set('carrot', 'orange')
map.set('dog', 'brown')
map.set('elephant', 'gray')
map.set('frog', 'green')
map.set('grape', 'purple')
map.set('hat', 'black')
map.set('ice cream', 'white')
map.set('jacket', 'blue')
map.set('kite', 'pink')
map.set('lion', 'golden')
map.set('some', 'thing')


console.log(`
  map-capacity: ${map.capacity}\n
  map-length: ${map.length()}\n
  ${map.visualize()}
  `)


