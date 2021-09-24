let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

let thingsInt = things.filter(num => Number.isInteger(num));

console.log(thingsInt);