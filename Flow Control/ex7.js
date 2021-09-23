function cap10(str) {
	if (str.length > 10) {
		return str.toUpperCase();
	}else{
		return str;
	};
};

console.log(cap10('hello world'));
console.log(cap10('goodbye'));