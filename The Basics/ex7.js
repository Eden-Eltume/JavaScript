let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error?

/*
No, there won't be an error. When you use an index value that has no corresponding element, JavaScript returns undefined
*/