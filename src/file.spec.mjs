import { A, B, C } from './file.mjs'

describe('Test Suite Unit', () => {
    it('Should return true', () => {
        const testingA = A()
        expect(testingA).toBe(true)
    })

    it('Should return on object', () => {
        const testingB_1 = B(0)
        expect(testingB_1).toEqual({
            enabled: false,
            value: { a: 23, b: 24, c: 25 },
        })
    })

    it('Should return an error string', () => {
        const testingB_2 = B(56)
        expect(testingB_2).toBe('err')
    })
    
    it('Should return a false value', () => {
        const testingC = C()
        expect(testingC).toBe(false)
    })
})
