import triangular from './triangular'

describe('triangular function', () => {
	it('Should return 1 for input 1', () => {
		expect(triangular(1)).toBe(1)
	})

	it('Should return 3 for input 2', () => {
		expect(triangular(2)).toBe(3)
	})

	it('Should return 6 for input 3', () => {
		expect(triangular(3)).toBe(6)
	})

	it('Should return 10 for input 4', () => {
		expect(triangular(4)).toBe(10)
	})

	it('Should return 15 for input 5', () => {
		expect(triangular(5)).toBe(15)
	})

	it('Should return 21 for input 6', () => {
		expect(triangular(6)).toBe(21)
	})

	it('Should return 28 for input 7', () => {
		expect(triangular(7)).toBe(28)
	})

	it('Should return 36 for input 8', () => {
		expect(triangular(8)).toBe(36)
	})

	it('Should return 45 for input 9', () => {
		expect(triangular(9)).toBe(45)
	})

	it('Should return 55 for input 10', () => {
		expect(triangular(10)).toBe(55)
	})
})
