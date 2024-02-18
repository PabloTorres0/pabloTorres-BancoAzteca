const primo = (n: number):number => {
	const seriePrimo = (position: number):number => {
		let j = 1
		let i = 0

		while (i < position) {
			if (isPrimo(j) && j !== 4) {
				i++
			}
			j++
		}
		return j - 1
	}

	const isPrimo = (num: number):boolean => {
		for (let i = 2; i < num / 2; i++) {
			if (num % i === 0) {
				return false
			}
		}
		return num !== 1
	}
	return seriePrimo(n)
}

export default primo
