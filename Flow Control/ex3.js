//evenOrOdd, ensure integer

function evenOrOdd (number){
	let intNum = Number.isInteger(number);

	if (intNum && number % 2 === 0){
		console.log('The number is even.');

	}else if (intNum && number % 2 !== 0) {
		console.log('The number is odd.');
	}else{
		console.log("The number is not an integer.");
		return;
	};
};


evenOrOdd(4);
evenOrOdd(5);
evenOrOdd(2.3);