// 4! 	1 * 2 * 3 * 4 	24

/*
input: 4
output: 24
steps:
1. count from 1 to the input number
2. multiply *= the number as pushed into the counter
3. return the factorial result
*/



function factorialResult(number) {
	let result = 1;
	for(index = 1; index <= number; index +=1) {
		result *= index
	}
	return result
}

console.log(factorialResult(4));
