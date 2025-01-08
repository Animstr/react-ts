import { classNames } from "./classNames"

describe('classNames tests', () => {
    test('only one class', () => {
        expect(classNames('className')).toBe('className')
    })
    test('main class + additional classes', () => {
        expect(classNames('className', ['cl1', 'cl2'])).toBe('className cl1 cl2')
    })
    test('2 true mods', () => {
        expect(classNames('className', [], {'cl1': true, 'cl2': true})).toBe('className cl1 cl2')
    })
    test('false mode', () => {
        expect(classNames('className', [], {'cl1': false, 'cl2': true})).toBe('className cl2')
    })
    test('main + additional + mode', () => {
        expect(classNames('className', ['cl1', 'cl2'], {'cl3': true})).toBe('className cl1 cl2 cl3')
    })
})

