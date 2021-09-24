let array = [3, 5, 7];

function sumOfSquares(array){
	let result = array.reduce((acc, el) => acc + (el * el), 0);
	return result
}

console.log(sumOfSquares(array)); // => 83