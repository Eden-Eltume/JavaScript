let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};



for (let key in obj){
  if (key == 'bar'){
    obj.bar[3].xyz = 606;
  }
}

console.log(obj);