const fibonacci = (n: number):number => {
	let num1 = 0
	let num2 = 1
	let fibbonacci = 1

	for (let i = 2; i <= n; i++) {
		fibbonacci = num1 + num2
		num1 = num2
		num2 = fibbonacci
	}

	return fibbonacci
}

export default fibonacci
