// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// map 
let myMap = new Map();
console.log(myMap)

// set get has delete
// size

myMap.set('name', [{name: 'kumaran', pass: true}, {name: 'kumaran', pass: true}, {name: 'kumaran', pass: true},{name: 'kumaran', pass: true},{name: 'kumaran', pass: true},{name: 'kumaran', pass: true}]);
console.log(myMap.get('name'))

myMap.set('kathir', 12121)
myMap.delete('kathir')

myMap.set(50, 'pass')
console.log(myMap.get(50))

myMap.delete(50)
console.log(myMap.get(50))

console.log(myMap.has('kathir'))

myMap.set('name', [1,2])

console.log(myMap.get('name'))

myMap.set('suren', 12)
console.log(myMap.size)








