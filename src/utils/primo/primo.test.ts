import primo from './primo'

describe('primo function', () => {
	it('Should return 2 for position 1', () => {
		expect(primo(1)).toBe(2)
	})

	it('Should return 3 for position 2', () => {
		expect(primo(2)).toBe(3)
	})

	it('Should return 5 for position 3', () => {
		expect(primo(3)).toBe(5)
	})

	it('Should return 7 for position 4', () => {
		expect(primo(4)).toBe(7)
	})

	it('Should return 11 for position 5', () => {
		expect(primo(5)).toBe(11)
	})

	it('Should return 13 for position 6', () => {
		expect(primo(6)).toBe(13)
	})

	it('Should return 17 for position 7', () => {
		expect(primo(7)).toBe(17)
	})

	it('Should return 19 for position 8', () => {
		expect(primo(8)).toBe(19)
	})

	it('Should return 23 for position 9', () => {
		expect(primo(9)).toBe(23)
	})

	it('Should return 29 for position 10', () => {
		expect(primo(10)).toBe(29)
	})
})
