import { getQueryParams } from "./addQueryParams"

describe('addQueryParams', () => {
    test('test with one param', () => {
        const params = getQueryParams({
            test: 'value'
        })
        expect(params).toBe(`?test=value`)
    })
    test('test with multiple params', () => {
        const params = getQueryParams({
            test: 'value',
            second: '2',
            rotation: 'right'
        })
        expect(params).toBe(`?test=value&second=2&rotation=right`)
    })
    test('test with undefined', () => {
        const params = getQueryParams({
            test: 'value',
            second: undefined
        })
        expect(params).toBe(`?test=value`)
    })
})