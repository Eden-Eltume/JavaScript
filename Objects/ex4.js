let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let objArr = Object.keys(obj)
let newArr = objArr.map(letter => letter.toUpperCase() );

console.log(newArr);
console.log(obj);