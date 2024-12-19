function getLetter(s) {
	let letter;
	// Write your code here
	let firstChar = s[0];
	console.log(s);

	const a = `aeiou`;
	const b = `bcdfg`;
	const c = `hjklm`;
	const d = `npqrstuvwxyz`;
	switch (true) {
		case a.includes(firstChar):
			letter = `A`;
			break;
		case b.includes(firstChar):
			letter = `B`;
			break;
		case c.includes(firstChar):
			letter = `C`;
			break;
		case d.includes(firstChar):
			letter = `D`;
			break;
		default:
			letter = ` Invalid character`;
			break;
	}

	return letter;
}

console.log(getLetter(`hyper`));
