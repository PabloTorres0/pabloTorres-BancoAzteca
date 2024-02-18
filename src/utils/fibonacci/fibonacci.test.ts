import fibonacci from './fibonacci'

describe('fibonacci function', () => {
	it('Should return 1 for input 1', () => {
		expect(fibonacci(1)).toBe(1)
	})

	it('Should return 1 for input 2', () => {
		expect(fibonacci(2)).toBe(1)
	})

	it('Should return 2 for input 3', () => {
		expect(fibonacci(3)).toBe(2)
	})

	it('Should return 3 for input 4', () => {
		expect(fibonacci(4)).toBe(3)
	})

	it('Should return 5 for input 5', () => {
		expect(fibonacci(5)).toBe(5)
	})

	it('Should return 8 for input 6', () => {
		expect(fibonacci(6)).toBe(8)
	})

	it('Should return 13 for input 7', () => {
		expect(fibonacci(7)).toBe(13)
	})

	it('Should return 21 for input 8', () => {
		expect(fibonacci(8)).toBe(21)
	})

	it('Should return 34 for input 9', () => {
		expect(fibonacci(9)).toBe(34)
	})

	it('Should return 55 for input 10', () => {
		expect(fibonacci(10)).toBe(55)
	})
})
